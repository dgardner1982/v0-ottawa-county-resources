'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Globe, X } from 'lucide-react';
import { Footer } from '@/components/footer';

interface Resource {
  name: string;
  category: string;
  address: string;
  phone: string;
  info: string;
  link?: string;
  website?: string;
  hours?: string;
  officeAddress?: string;
  officeHours?: string;
  officePhone?: string;
  officeWebsite?: string;
  officeDescription?: string;
}

// Phone Call Handler Component
function PhoneLink({ phoneNumber, displayText }: { phoneNumber: string; displayText: string }) {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className="text-teal-700 font-bold hover:underline"
      title="Click to call"
    >
      {displayText}
    </a>
  );
}

const RESOURCES: Resource[] = [
  // Overdose Prevention
  { name: "Naloxone/Narcan", category: "Overdose Prevention/Free Naloxone(Narcan)", address: "Multiple locations", phone: "See Locations", info: "Naloxone (Narcan) is a life-saving medication to reverse opioid overdose. Free kits are available in Ottawa County. For a list of locations click below.", link: "/naloxone-locations" },
  { name: "Overdose Prevention Training", category: "Overdose Prevention/Free Naloxone(Narcan)", address: "", phone: "616-393-4489", info: "Overdose Prevention and Naloxone Training. To schedule a free overdose prevention training for yourself or your organization contact Daniel at dgardner@miottawa.org or call 616-393-4489." },

  // Harm Reduction
  { name: "Grand Rapids Red Project", category: "Harm Reduction", address: "401 Hall St SE, Grand Rapids, MI 49507", phone: "616-456-9063", info: "Comprehensive harm reduction services and support.", website: "https://www.redproject.org" },
  { name: "Grand Rapids Red Project Mobile Health Unit", category: "Harm Reduction", address: "Friday Afternoons 1-4pm outside of Skipp's Pharmacy, Holland", phone: "616-456-9063", info: "Harm Reduction Services available through the mobile health unit.", website: "https://www.redproject.org" },

  // Mental Health
  { name: "Community Mental Health of Ottawa County - Holland", category: "Mental Health", address: "12265 James St, Holland", phone: "616-392-1873", info: "Main entry for mental health and IDD services. Includes 24/7 crisis support.", website: "https://miottawa.org/cmh/" },
  { name: "Community Mental Health of Ottawa County - Grand Haven", category: "Mental Health", address: "1111 Fulton St, Grand Haven", phone: "616-842-4357", info: "Outpatient clinical services for North Ottawa residents.", website: "https://miottawa.org/cmh/" },
  { name: "988 Lifeline", category: "Mental Health", address: "National", phone: "988", info: "Suicide & Crisis Lifeline available 24/7 - call or text.", website: "https://988lifeline.org" },
  { name: "Crisis Text Line", category: "Mental Health", address: "National", phone: "Text HOME to 741741", info: "Crisis support via text message.", website: "https://www.crisistextline.org" },
  { name: "Ottawa Community Mental Health 24-Hour Helpline", category: "Mental Health", address: "Multiple locations", phone: "616-396-4357", info: "24-hour mental health crisis helpline.", website: "https://www.cmhoc.org" },
  { name: "Pine Rest Holland", category: "Mental Health", address: "926 S. Washington #210, Holland", phone: "616-820-3780", info: "Mental health and psychiatric services.", hours: "M-Th 8:30a-8p, F 8:30a-3p", website: "https://www.pinerest.org" },
  { name: "Pine Rest North Shore", category: "Mental Health", address: "17325 Van Wagoner Rd, Spring Lake", phone: "616-847-5145", info: "Mental health services.", hours: "M-Th 8a-6:30p, F 8a-3p", website: "https://www.pinerest.org" },
  { name: "Pine Rest Grand Rapids Psychiatric Urgent Care", category: "Mental Health", address: "300 68th Street SE Bldg E, Grand Rapids", phone: "616-455-9200", info: "Psychiatric urgent care.", hours: "10a-8p daily", website: "https://www.pinerest.org" },
  { name: "Encourage Counseling", category: "Mental Health", address: "607 Heritage Court, Holland", phone: "616-396-6172", info: "Professional counseling services.", hours: "M 9a-6p, Tu-Th 8:30a-6p", website: "https://encouragecounseling.com" },
  { name: "Beacon of Hope Christian Counseling Holland", category: "Mental Health", address: "225 W. 30th St, Holland", phone: "616-594-5380", info: "Christian counseling services.", website: "https://beaconofhopecc.org" },
  { name: "Beacon of Hope Christian Counseling Grandville", category: "Mental Health", address: "6265 8th Ave, Grandville", phone: "616-594-5380", info: "Christian counseling services.", website: "https://beaconofhopecc.org" },
  { name: "Bethany Christian Services Holland", category: "Mental Health", address: "11335 James St, Holland", phone: "616-396-0623", info: "Christian counseling and services.", hours: "M-Th 10a-9p, F 10a-3p", website: "https://www.bethanycc.org" },
  { name: "Bethany Christian Services Grand Haven", category: "Mental Health", address: "1475 Robbins Rd, Grand Haven", phone: "616-396-0623", info: "Christian counseling and services.", hours: "M-Th 9a-8p", website: "https://www.bethanycc.org" },
  { name: "City On A Hill Ministries", category: "Mental Health", address: "100 Pine St STE 175, Zeeland, MI 49464", phone: "(616) 748-6060", info: "Multi-service community hub with health clinic providing free or low-cost mental health services.", website: "https://www.coahm.org" },
  { name: "Counseling Center of West Michigan - Holland Campus", category: "Mental Health", address: "3124 N Wellness Dr # 50, Holland, MI 49424", phone: "(616) 805-3660 ext. 1201", info: "Diverse counseling for children, teens, and adults. Specialized therapy for couples and families, large provider network with evening and Saturday availability.", hours: "M-F 8a-8p, Sat 8a-2p", website: "https://www.counselingcenterwm.org" },
  { name: "Mosaic Counseling - Grand Haven", category: "Mental Health", address: "1703 S. Despelder St., Grand Haven", phone: "616-842-9160", info: "Professional counseling.", hours: "M-F 9a-4p", website: "https://mosaiccounseling.com" },
  { name: "Mosaic Counseling - Holland", category: "Mental Health", address: "503 Century Ln, Holland, MI 49423", phone: "616-842-9160", info: "Professional counseling.", hours: "M-F 9a-4p", website: "https://mosaiccounseling.com" },
  { name: "Trinity Health Hospital ER", category: "Mental Health", address: "1500 E. Sherman Blvd., Muskegon", phone: "231-672-2000", info: "Secured psychiatric facility emergency services.", website: "https://www.trinity-health.org" },
  { name: "Winning At Home", category: "Mental Health", address: "300 S State St STE 13, Zeeland, MI 49464", phone: "(616) 772-1733", info: "Professional counseling for individuals, couples, and families. Includes coaching, wellness programs, workshops on parenting and marriage, and online resources.", hours: "M-Th 8a-8p, F 8a-3p", website: "https://www.winningathome.com" },
  
  // Substance Recovery
  { name: "Arbor Circle - Holland", category: "Substance Recovery", address: "412 Century Ln, Holland, MI 49423", phone: "(616) 396-2301", info: "Substance abuse treatment and recovery programs.", website: "https://arborcircle.org" },
  { name: "Chester Ray Center & Harbor House", category: "Substance Recovery", address: "Holland", phone: "616-396-5284", info: "Recovery programs operated by Reach for Recovery. Chester Ray Center and Harbor House provide comprehensive substance recovery and support services.", website: "https://reachforrecovery.org" },
  { name: "Community Mental Health of Ottawa County", category: "Substance Recovery", address: "<b>Holland:</b> 12265 James St, Holland, MI 49424 | <b>Grand Haven:</b> 1111 Fulton St, Grand Haven, MI 49417", phone: "(616) 393-5681", info: "Access services available Monday through Friday, 8:00 AM – 5:00 PM. Crisis line available 24/7 at (866) 512-4357 or (616) 396-4357.", website: "https://www.miottawa.org/cmh" },
  { name: "Mercy Health Life Counseling", category: "Substance Recovery", address: "125 E. Southern Ave, Muskegon", phone: "231-726-3582", info: "Counseling services. Walk-ins available.", website: "https://www.mercyhealth.org" },
  { name: "New Vision Withdrawal Management", category: "Substance Recovery", address: "1309 Sheldon Road, Grand Haven, MI 49417", phone: "1-844-237-3627", info: "Inpatient detoxification and substance use disorder services at Trinity Health Grand Haven Hospital. Comprehensive withdrawal management program.", website: "https://trinityhealthmichigan.org" },
  { name: "Pine Rest Spring Lake", category: "Substance Recovery", address: "17325 Van Wagoner Rd, Spring Lake", phone: "866-852-4001", info: "Substance recovery and mental health services.", website: "https://www.pinerest.org" },
  { name: "Reach for Recovery - Grand Haven", category: "Substance Recovery", address: "700 Washington Ave #220, Grand Haven", phone: "616-842-6710", info: "Counseling and recovery community connection.", website: "https://reachforrecovery.org" },
  { name: "Reach for Recovery - Holland", category: "Substance Recovery", address: "483 Century Lane, Holland", phone: "616-396-5284", info: "Comprehensive outpatient and residential programs.", website: "https://reachforrecovery.org" },
  { name: "Samaritas - Grand Haven", category: "Substance Recovery", address: "923 S Beechtree St Ste 10, Grand Haven, MI", phone: "(616) 516-9985", info: "Substance use treatment and recovery services including medication-assisted treatment.", website: "https://www.samaritas.org" },
  { name: "Samaritas - Holland", category: "Substance Recovery", address: "2416 Van Ommen Dr, Holland, MI 49424", phone: "(616) 350-7781", info: "Substance use treatment and recovery services including medication-assisted treatment.", website: "https://www.samaritas.org" },
  { name: "Sobar Recovery Community Center", category: "Substance Recovery", address: "347 Hoover Blvd, Holland", phone: "Call for details", info: "Community recovery center offering support, education, and activities for individuals and families in recovery.", website: "https://sobarrco.com" },

  // Domestic Violence
  { name: "Every Woman's Place Inc", category: "Domestic Violence", address: "1221 W Laketon Ave, Muskegon, MI 49441", phone: "(231) 722-3333", info: "Muskegon-based agency providing crisis intervention, emergency shelter, counseling, and legal advocacy for survivors of domestic violence, sexual assault, and sex trafficking. 24-hour crisis line available.", website: "https://www.everywomansplace.org" },
  { name: "Resilience: Advocates for Ending Violence", category: "Domestic Violence", address: "411 Butternut Dr, Holland, MI 49424", phone: "(800) 848-5991", info: "Non-profit providing 24-hour crisis support, emergency shelter, counseling, legal advocacy, and community education for survivors of domestic and sexual violence.", hours: "M-F 9a-5p, crisis services 24/7", website: "https://www.resiliencemi.org" },
  { name: "Sylvia's Place", category: "Domestic Violence", address: "235 North St, Allegan, MI 49010", phone: "(269) 673-8700", info: "Primary domestic violence agency for Allegan County providing 24-hour help line, emergency shelter, legal advocacy, and support services. Toll-free: (888) 411-7837. Available 24/7.", website: "https://www.sylviasplace.com" },

  // Medication-Assisted Treatment
  { name: "Western Michigan Comprehensive Treatment Center", category: "Medication-Assisted Treatment", address: "3584 Fairlanes Ave SW STE 2, Grandville, MI 49418", phone: "(616) 797-2124", info: "Major provider of outpatient medication-assisted treatment for adults struggling with opioid use disorder. Offers methadone, Suboxone, and buprenorphine.", website: "https://ctcprograms.com" },
  { name: "Eastside Outpatient Services", category: "Medication-Assisted Treatment", address: "445 E Sherman Blvd, Muskegon, MI 49444", phone: "(231) 739-4359", info: "Located just north of Ottawa County, provides liquid methadone treatment coupled with counseling and rehabilitative services in a safe environment.", website: "https://eastsidesac.com" },
  { name: "Cherry Health – Muskegon Recovery Center", category: "Medication-Assisted Treatment", address: "1611 Oak Ave, Muskegon, MI 49442", phone: "(231) 767-1921", info: "Offers comprehensive MAT services including methadone and buprenorphine, integrated with individual and group therapy sessions.", website: "https://cherryhealth.org" },
  { name: "Holland Hospital Behavioral Health, Outpatient", category: "Medication-Assisted Treatment", address: "854 Washington Ave STE 330, Holland, MI 49423", phone: "(616) 355-3926", info: "Hospital-based program providing outpatient methadone, buprenorphine, and naltrexone treatment options alongside intensive outpatient services.", website: "https://hollandhospital.org" },
  { name: "Reach for Recovery - MAT", category: "Medication-Assisted Treatment", address: "483 Century Ln, Holland, MI 49423", phone: "(616) 396-5284", info: "Provides outpatient and residential medication-assisted services tailored for both men and women in the Holland area.", website: "https://reachforrecovery.org" },
  { name: "Pine Rest Holland Clinic - MAT", category: "Medication-Assisted Treatment", address: "926 S. Washington #210, Holland, MI 49423", phone: "(616) 820-3780", info: "Comprehensive mental health and substance recovery services including medication-assisted treatment with psychiatric support.", website: "https://www.pinerest.org" },
  { name: "Samaritas Holland", category: "Medication-Assisted Treatment", address: "2416 Van Ommen Dr, Holland, MI 49424", phone: "(616) 350-7781", info: "Offers medication-assisted treatment services with integrated recovery support, community meals, and therapeutic programming.", website: "https://www.samaritas.org" },
  { name: "Samaritas Grand Haven", category: "Medication-Assisted Treatment", address: "923 S Beechtree St Ste 10, Grand Haven, MI", phone: "(616) 516-9985", info: "Samaritas provides comprehensive MAT services focused on recovery and community integration in the Grand Haven area.", website: "https://www.samaritas.org" },

  // Food
  { name: "Christian Fellowship Assembly", category: "Food", address: "9930 64th Ave, Allendale", phone: "616-895-7614", info: "Food pantry and community meals.", website: "https://www.christianfellowshipassembly.org" },
  { name: "LOVE INC Allendale", category: "Food", address: "6633 Lake Michigan Dr, Allendale", phone: "616-895-5683", info: "Food pantry. Must bring photo ID and utility bill.", hours: "M-F 9a-2p", website: "https://loveincallegan.org" },
  { name: "Replenish GVSU Pantry", category: "Food", address: "Kirkhof Center 0074, Allendale", phone: "616-331-7867", info: "Food pantry for GVSU students only.", hours: "M-F 12p-5p", website: "https://www.gvsu.edu" },
  { name: "Coopersville Cares", category: "Food", address: "180 68th Ave N, Coopersville, MI 49404", phone: "616-997-8602", info: "Food pantry offering supplemental groceries and household essentials to local residents who meet income eligibility guidelines. Serves the Coopersville Public School district.", hours: "M-Th 9a-2p, Tu & Th 10a-12p, Tu 5:30p-6:30p", website: "https://coopersvillecares.org" },
  { name: "LOVE INC Grand Haven", category: "Food", address: "326 Ferry St, Grand Haven", phone: "616-846-2701", info: "Food pantry.", hours: "M-F 9a-5p", website: "https://loveincallegan.org" },
  { name: "The People Center", category: "Food", address: "307 E Exchange St, Spring Lake, MI 49456", phone: "(616) 844-6710", info: "Food pantry offering supplemental groceries to residents in the Spring Lake, Ferrysburg, and Grand Haven areas.", hours: "M, W, F 11a-5p", website: "https://www.thepeoplecenter.org" },
  { name: "St. John's Episcopal Church", category: "Food", address: "524 Washington Ave, Grand Haven", phone: "616-842-6260 ext 21", info: "Free take-home meals.", hours: "W 5:30p-6:30p, Sun 1p-2p", website: "https://sjegh.com" },
  { name: "The Salvation Army Grand Haven", category: "Food", address: "310 N Despelder St, Grand Haven", phone: "616-842-3380 ext 200", info: "Food pantry by appointment only.", hours: "M-F 9a-3p", website: "https://www.salvationarmyusa.org" },
  { name: "East Side Food Pantry", category: "Food", address: "995 E. 8th St, Holland", phone: "616-392-8559 ext 18", info: "Serves Holland Heights residents only.", hours: "M & W 10a-11:30a, F 3p-4:30p", website: "https://www.cityofholland.com" },
  { name: "Holland First Assembly of God", category: "Food", address: "1331 E. 16th St, Holland", phone: "616-396-5646", info: "Food pantry. Call for hours/appointments.", website: "https://hfag.com" },
  { name: "St. Vincent De Paul Center", category: "Food", address: "170 W. 13th St, Holland", phone: "616-394-0676", info: "Food pantry.", hours: "M & W 3p-8p, Sat 12p-4p", website: "https://stfrancisholland.org/svdp" },
  { name: "The Salvation Army Holland", category: "Food", address: "104 Clover St, Holland", phone: "616-392-4461", info: "Food pantry by appointment only.", website: "https://www.salvationarmyusa.org" },
  { name: "Community Action House", category: "Food", address: "345 W. 14th St, Holland", phone: "616-392-2368", info: "Food pantry by appointment only.", website: "https://www.chservices.org" },
  { name: "Holland Community Kitchen", category: "Food", address: "101 E. 13th St, Holland", phone: "616-566-1417", info: "Free community meals.", hours: "M-F 11a-12:30p, Sat & Sun 9a-10:30a", website: "https://www.hollandandk.org" },
  { name: "Holland Drop-in Center", category: "Food", address: "636 Hastings Ave #120, Holland", phone: "616-355-2207", info: "Community meals and recovery support.", hours: "M-Sat 9a-4p", website: "https://www.hdic.org" },
  { name: "Ottawa Foods", category: "Food", address: "12251 James Street, Suite 400, Holland, MI 49424", phone: "616-393-5791", info: "Connect people to food resources and community support services.", website: "https://www.ottawafood.org" },
  { name: "Jehovah Jireh Ministries of West Michigan", category: "Food", address: "4055 VanBuren St, Hudsonville", phone: "616-209-7688", info: "Food pantry. Bring your own bags.", hours: "W 11:30a-5:30p, Sat 8a-1p", website: "https://jjministries.org" },
  { name: "Love Your Neighbor", category: "Food", address: "3300 Van Buren St, Hudsonville", phone: "616-662-3300", info: "Faith-based clearinghouse model coordinating church resources. Food pantry providing access to supplemental groceries and household essentials. Life Skills program and personal care items available.", hours: "M-F 10am - 5pm, Sat 10am - 3pm, Sun Closed", website: "https://lovewm.org" },
  { name: "The People Center", category: "Food", address: "307 E. Exchange, Spring Lake", phone: "616-844-6710", info: "Food pantry. Call first for appointment.", hours: "M & W 11a-3p", website: "https://www.thepeoplecenter.org" },
  { name: "Harvest Stand Ministries", category: "Food", address: "100 Pine St Ste 100, Zeeland", phone: "616-748-6003", info: "Food pantry. By appointment.", hours: "M 9a-3p, W 1p-6p, Th 9a-12p", website: "https://harveststandministries.org" },
  { name: "MI Bridges", category: "Food", address: "State Program", phone: "1-888-544-8773", info: "State food assistance program.", website: "https://www.michigan.gov/mibridges" },

  // Clothing and Furniture
  { name: "Love Your Neighbor", category: "Clothing and Furniture", address: "3300 Van Buren St, Hudsonville, MI 49426", phone: "(616) 662-3300", info: "Provides access to clothing, linens, and household furniture through Essential Resource Ministries. Faith-based clearinghouse coordinating local church resources for the Hudsonville, Jenison, and Grandville areas.", hours: "M-F 10am - 5pm, Sat 10am - 3pm, Sun Closed", website: "https://lovewm.org" },
  { name: "Habitat for Humanity ReStore Grand Haven", category: "Clothing and Furniture", address: "Grand Haven Restore, 408 N Ferry St, Grand Haven, MI 49417", phone: "(616) 846-1505", info: "ReStore location offering affordable furniture and household goods. Proceeds help build housing for low income families through partnerships with local churches, businesses, and individuals. Anyone is welcome to volunteer regardless of race or religion.", hours: "M-F 9:30 AM – 6:30 PM; Sat 9:30 AM – 4:30 PM", officeAddress: "Office, 3610 Airline Dr, Norton Shores, MI 49444", officeHours: "M-F 9:00 AM – 5:00 PM", website: "https://tricitieshabitat.org" },
  { name: "Habitat for Humanity ReStore Lakeshore", category: "Clothing and Furniture", address: "12727 Riley St, Holland, MI 49424", phone: "(616) 393-8001", info: "Nonprofit thrift store and donation store with 2 purposes. To keep used items out of the landfill, and to help families in Ottawa, Allegan, and Van Buren counties access safe and affordable homeownership. Sales go towards affordable housing. Also builds housing for low income families.", hours: "T-F 10:00 AM – 5:30 PM; Saturday 10:00 AM – 4:00 PM", website: "https://lakeshorehabitat.org/restore" },
  { name: "The People Center - Clothing Hutch", category: "Clothing and Furniture", address: "Spring Lake", phone: "Contact for details", info: "Provides gently used clothes and household items at no cost to families in the Tri-Cities area. Offers men's, women's, and children's clothing, as well as books and backpacks. Open Monday, Wednesday, and Friday from 11:00 AM to 5:00 PM. Services available to Grand Haven, Spring Lake, Ferrysburg, and nearby communities.", website: "Contact for details" },
  { name: "Grant Me Hope Thrift Store", category: "Clothing and Furniture", address: "930 Interchange Drive, Holland, Michigan 49423", phone: "616-379-4054", info: "Public thrift store supporting adoption and fostering initiatives. Provides information about adoption and fostering services, job opportunities and housing for youth who've aged out of foster care, and free clothing for parents of foster children upon completion of intake survey. Also offers work experience opportunities for youth aging out of foster care.", hours: "M-F 10:00 AM – 6:00 PM, Sat 10:00 AM – 4:00 PM", website: "https://grantmehope.org" },
  { name: "Love in Action Tri-Cities", category: "Clothing and Furniture", address: "Grand Haven, 948 Robbins Rd, Grand Haven 49417", phone: "(616) 607-2827", info: "Manages resale shops providing clothing and household items. Proceeds support emergency assistance programs.", hours: "Store: M-F 10am – 6pm, Sat 10am – 4pm\nDonations: M-F 10am – 4pm, Sat 10am – 2pm", officeAddress: "Spring Lake, 200 W. Savidge St., Spring Lake 49456", officePhone: "(616) 844-1360", officeHours: "Store: M-F 10am – 6pm, Sat 10am – 4pm\nPlease note: We are not able to accept donations at our Spring Lake location.", website: "https://www.loveinactiontricities.org", officeWebsite: "https://www.loveinactiontricities.org" },
  { name: "New to You Thrift & Donation Center", category: "Clothing and Furniture", address: "Thrift Store, 11620 60th Ave, Allendale MI 49401", phone: "616-895-5683", info: "Affiliated with Love INC, offers low-cost furniture, clothing, and housewares. Features large inventory of gently used items. Sales directly fund local ministries. Donations only accepted during store hours.", hours: "M-F 9am-5pm, Sat 9am-4pm", officeAddress: "LoveINC Office, 6633 Lake Michigan Drive, Allendale MI 49401", officeHours: "M-F 9am - 2pm\nFor administration and client intake", officeDescription: "Love INC of Northeast Ottawa County partners with local churches to support neighbors in need through relational care, emergency financial aid, food, clothing, household goods, and medical equipment. They also offer long term stability tools, including personal budgeting classes, employment connections, and seasonal assistance programs.", website: "https://loveincallegan.org", officeWebsite: "https://loveincallegan.org" },
  { name: "Paradise Bound Thrift Shoppe", category: "Clothing and Furniture", address: "Downtown Zeeland on Washington Avenue", phone: "Contact for details", info: "Provides affordable apparel and home goods with well-organized selection of adult and children's clothing. Proceeds support mission work and community outreach. Open daily 9:00 AM – 7:00 PM (Saturday 9:00 AM – 5:00 PM).", website: "Contact for details" },
  { name: "Legacy Thrift", category: "Clothing and Furniture", address: "Holland (North), 91 Douglas Ave", phone: "616-394-5260", info: "Popular destination for budget-conscious shoppers with apparel, footwear, and accessories. Maintains consistent rotation of seasonal clothing at accessible price points. Revenue supports local educational and community development initiatives.", hours: "M, T, Th, F 10-5; S 11-3", officeAddress: "Holland (South), 813 Lincoln Ave", officePhone: "616-395-0129", officeHours: "M-F 10-5; S 10-4", website: "https://legacythrift.org", officeWebsite: "https://legacythrift.org" },

  // Housing
  { name: "Good Samaritan Ministries", category: "Housing", address: "513 E. 8th St, Holland", phone: "616-392-7159", info: "Housing Search Assistance, Rapid Re-housing, and CHP programs.", website: "https://www.gsministries.org" },
  { name: "Gateway Mission", category: "Housing", address: "643 S Waverly Rd, Holland", phone: "616-396-2200", info: "Emergency shelter for men and long-term recovery programs.", website: "https://hopefoundhere.org" },
  { name: "Gateway Mission Women & Children's Center", category: "Housing", address: "356 Fairbanks Ave, Holland", phone: "616-396-2200", info: "Specialized residential recovery program for women and children seeking housing and support services.", website: "https://hopefoundhere.org" },
  { name: "Community Action House", category: "Housing", address: "345 W. 14th St, Holland", phone: "616-392-2368", info: "Permanent supportive housing services.", website: "https://www.chservices.org" },
  { name: "My House Ministry", category: "Housing", address: "96 West 15th Street Suite 306, Holland", phone: "616-953-0772", info: "Housing & restorative programs for women/children of domestic violence.", website: "https://myhouseministry.org" },
  { name: "The People Center", category: "Housing", address: "307 E Exchange St, Spring Lake, MI 49456", phone: "(616) 844-6710", info: "Housing assistance providing support and resources for those experiencing housing instability or homelessness. M, W, F 11a-5p.", website: "https://www.thepeoplecenter.org" },
  { name: "Building Men for Life", category: "Housing", address: "370 Country Club Road Suite 50, Holland", phone: "616-393-2188", info: "Recovery housing for men providing safe, structured living conditions for individuals in recovery. Includes peer support and certified recovery coaching.", website: "https://buildingmenforlife.com" },
  { name: "Mel Trotter Ministries", category: "Housing", address: "225 Commerce Ave SW, Grand Rapids", phone: "616-454-8249", info: "Emergency shelter and recovery programs.", website: "https://www.meltrotter.org" },
  { name: "Muskegon Rescue Mission", category: "Housing", address: "400 W. Laketon Ave, Muskegon", phone: "231-727-6085", info: "Emergency shelter. Need picture ID and min. age 18.", website: "https://www.muskegonrescuemission.org" },
  { name: "Arbor Circle - The Bridge", category: "Housing", address: "1115 Ball Ave NE, Grand Rapids", phone: "616-451-3001", info: "Shelter and basic needs services for youth ages 10-17 years old.", website: "https://arborcircle.org/help/the-bridge/" },
  { name: "70x7 Life Recovery", category: "Housing", address: "97 W. 22nd St, Holland", phone: "616-796-0685", info: "Sober living and post-incarceration housing programs.", website: "https://70x7liferecovery.org/program/housing/" },
  { name: "Every Woman's Place Inc", category: "Housing", address: "1221 W Laketon Ave, Muskegon, MI 49441", phone: "(231) 722-3333", info: "Emergency shelter and residential program for survivors of domestic violence and sexual assault. 24-hour crisis line available.", website: "https://www.everywomansplace.org" },
  { name: "Resilience: Advocates for Ending Violence", category: "Housing", address: "411 Butternut Dr, Holland, MI 49424", phone: "(800) 848-5991", info: "Emergency shelter for survivors of domestic and sexual violence.", hours: "M-F 9a-5p, emergency services 24/7", website: "https://www.resiliencemi.org" },
  { name: "Sylvia's Place", category: "Housing", address: "235 North St, Allegan, MI 49010", phone: "(269) 673-8700", info: "Emergency shelter for survivors of domestic violence and their children. 24-hour help line: (888) 411-7837.", website: "https://www.sylviasplace.com" },
  { name: "Tri-Cities Area Habitat For Humanity", category: "Housing", address: "3610 Airline Rd. Norton Shores, MI 49444", phone: "(616) 846-1505", info: "Provides affordable housing solutions through construction, home repairs, and financial education. Services include Homeownership Program (build/renovate houses with affordable mortgages), Home Repair Services for low-income homeowners, Habitat ReStore (donated building materials and furniture at discounted prices), and Financial Education on budgeting and credit.", website: "https://tricitieshabitat.com" },
  { name: "Lakeshore Habitat for Humanity", category: "Housing", address: "12727 Riley St, Holland, MI 49424", phone: "(616) 393-8001", info: "Serves the greater Holland area, creating affordable housing through new construction, home rehabilitation, and critical repairs. Services include Homeownership Program (sweat equity and financial education classes), Home Repair Services (exterior projects like siding and accessibility ramps), Habitat ReStore (home goods and building supplies with proceeds funding local builds), and Volunteer Advocacy opportunities.", website: "https://lakeshorehabitat.org" },
  { name: "YWCA West Central Michigan", category: "Housing", address: "25 Sheldon Blvd SE, Grand Rapids, MI 49503", phone: "(616) 454-9922", info: "Provides comprehensive services for survivors of domestic violence, sexual assault, and stalking. Services include 24-hour crisis helpline, emergency shelter, legal advocacy, and counseling for adults and children.", website: "https://ywcawcmi.org" },
  { name: "Exodus Place", category: "Housing", address: "322 Front Ave SW, Grand Rapids, MI 49504", phone: "(616) 242-9130", info: "Transitional housing program for men experiencing homelessness emphasizing a 'hand up' approach. Services include affordable housing with no time limits, life skills training, medical and dental coordination, and spiritual support.", website: "https://exodusplace.org" },
  { name: "Guiding Light", category: "Housing", address: "255 Division Ave S, Grand Rapids, MI 49503", phone: "(616) 451-0236", info: "Operates an intensive recovery and re-engagement program providing no-cost residential addiction treatment and structured pathways to employment. Services include four-month residential recovery program, women's recovery at Aquinas College campus, and the 'Iron House' sober living network.", website: "https://guidinglightworks.org" },
  { name: "Recovery Road", category: "Housing", address: "336 Wealthy St SE, Grand Rapids, MI 49503", phone: "(888) 588-0434", info: "Network of sober living homes throughout Grand Rapids and Muskegon providing structured environments for residents transitioning from clinical treatment to mainstream life. Services include eleven sober living houses (male and female), peer support, and accountability.", website: "https://recoveryroadhomes.org" },
  { name: "Fresh Coast Alliance", category: "Housing", address: "1128 Roberts St, Muskegon, MI 49442", phone: "(231) 286-1992", info: "Muskegon-based non-profit providing recovery housing for men and women, supporting individuals returning from incarceration and those in recovery from substance use. Offers one-on-one recovery coaching and stability-focused housing.", website: "https://freshcoastalliance.org" },

  // Health Care
  // Prenatal/Maternal
  { name: "Catholic Charities West Michigan", category: "Prenatal/Maternal", address: "456 Century Ln, Holland, MI 49423", phone: "(616) 796-9595", info: "Broad spectrum of family support services and point of distribution for child-related essentials including diapers, formula, and baby items.", website: "https://www.catholiccharitieswm.org" },
  { name: "Community Action House", category: "Prenatal/Maternal", address: "739 Paw Paw Dr, Holland, MI 49423", phone: "(616) 392-2368", info: "Community hub connecting families with essential supplies, nutrition, and maternal health programs. Hosts Help Me Grow: Play 'n Learn for birth to age 5, Chat & Chill support groups, Healthy@Home nutrition program, Food Club, and partnerships with Maternal Infant Health Program and Nestlings for diapers.", hours: "M-F 9a-5p", website: "https://www.communityactionhouse.org" },
  { name: "Love Your Neighbor", category: "Prenatal/Maternal", address: "3300 Van Buren St, Hudsonville, MI 49426", phone: "(616) 662-3300", info: "Provides personal care items and infant essentials not typically covered by state assistance programs. Faith-based organization coordinating local church resources for families in need.", hours: "M-F 10am - 5pm, Sat 10am - 3pm, Sun Closed", website: "https://lovewm.org" },
  { name: "Maternal Infant Health Program Grand Haven", category: "Prenatal/Maternal", address: "1207 S. Beechtree St., Grand Haven", phone: "616-846-8360", info: "Maternal and infant health services.", website: "https://www.cmhoc.org" },
  { name: "Maternal Infant Health Program Holland", category: "Prenatal/Maternal", address: "12251 James St, Holland", phone: "616-396-5266", info: "Maternal and infant health services.", website: "https://www.cmhoc.org" },
  { name: "Maternal Infant Health Program Hudsonville", category: "Prenatal/Maternal", address: "3100 Port Sheldon, Hudsonville", phone: "616-669-0040", info: "Maternal and infant health services.", website: "https://www.cmhoc.org" },
  { name: "The Salvation Army Holland Corps Community Center", category: "Prenatal/Maternal", address: "104 Clover St, Holland, MI 49423", phone: "(616) 392-4461", info: "Community center offering social services and emergency assistance, often including basic needs like diapers when supplies are available.", website: "https://www.salvationarmyusa.org" },

  // Health Care
  { name: "Holland Community Health Center", category: "Health Care", address: "336 S. River Ave, Holland", phone: "616-394-3788", info: "Primary and preventive health care.", hours: "M-F 8a-5p", website: "https://www.hollandcommunityhealthcenter.org" },
  { name: "Ottawa County Department of Public Health", category: "Health Care", address: "12251 James St, Holland, MI 49424", phone: "616-396-5266", info: "Essential public health services including immunizations, environmental health monitoring, and community health screenings.", website: "https://www.miottawa.org/health" },
  { name: "InterCare Community Health Network", category: "Health Care", address: "285 James St, Holland, MI 49424", phone: "855-869-6900", info: "Primary care provider offering medical, dental, and mental health services with a focus on underserved populations and migrant health.", website: "https://www.intercare.org" },
  { name: "Holland Free Health Clinic", category: "Health Care", address: "99 W 26th St, Holland, MI 49423", phone: "616-392-3610", info: "Offers free medical, dental, and vision services to uninsured and underinsured residents who meet specific income guidelines.", website: "https://www.hfhclinic.org" },
  { name: "City On A Hill Ministries", category: "Health Care", address: "100 Pine St, Zeeland, MI 49464", phone: "616-748-6060", info: "Provides free non-emergency medical care and counseling services through a team of volunteer professionals.", website: "https://coahm.org" },
  { name: "Love in Action Medical Clinic", category: "Health Care", address: "326 N Ferry St, Grand Haven, MI 49417", phone: "616-846-2701", info: "Provides urgent and primary medical and dental care for the Tri-Cities community.", website: "https://loveinactiontricities.org/liaclinic/" },
  { name: "Maternal Infant Health Program Grand Haven", category: "Health Care", address: "1207 S. Beechtree St., Grand Haven", phone: "616-846-8360", info: "Maternal and infant health services.", website: "https://www.cmhoc.org" },
  { name: "Maternal Infant Health Program Holland", category: "Health Care", address: "12251 James St, Holland", phone: "616-396-5266", info: "Maternal and infant health services.", website: "https://www.cmhoc.org" },
  { name: "Maternal Infant Health Program Hudsonville", category: "Health Care", address: "3100 Port Sheldon, Hudsonville", phone: "616-669-0040", info: "Maternal and infant health services.", website: "https://www.cmhoc.org" },

  // Dental
  { name: "Holland Free Health Clinic (HFHC)", category: "Dental", address: "99 W 26th St, Holland, MI 49423", phone: "616-392-3610", info: "Provides free dental services including oral exams, X-rays, cleanings, fillings, extractions, and oral surgery. Focus on medically underserved population in Ottawa and Allegan counties.", website: "https://www.hfhclinic.org" },
  { name: "Love in Action of the Tri-Cities (Dental Center)", category: "Dental", address: "326 N Ferry St, Grand Haven, MI 49417", phone: "616-846-2701", info: "Offers basic dental care and referrals provided by licensed volunteer dentists and hygienists. For adults 18+ who are uninsured or underinsured and meet financial eligibility guidelines.", website: "https://www.loveinactiontricities.org" },
  { name: "InterCare Community Health Network", category: "Dental", address: "285 James St, Holland, MI 49424", phone: "855-869-6900", info: "Comprehensive general and preventive dentistry services. Open to the public with sliding fee scale, accepts Medicaid, Healthy Michigan, and commercial plans.", website: "https://www.intercare.org" },
  { name: "City on a Hill Health Clinic", category: "Dental", address: "100 Pine St, Suite 175, Zeeland, MI 49464", phone: "616-748-6009", info: "Provides screenings, X-rays, fillings, extractions, and specialty care like root canals through a volunteer referral network. Focus on uninsured or those unable to pay.", website: "https://coah.org" },
  { name: "Miles of Smiles (MOS) Mobile Dental Unit", category: "Dental", address: "12251 James Street, Holland, MI 49424", phone: "616-393-5694", info: "40-foot mobile dental unit providing comprehensive services including cleanings, X-rays, and restorative work at schools and community sites. For Ottawa County children ages 0-20 with Medicaid or uninsured.", website: "https://www.miottawa.org" },
  { name: "Smile Help Now", category: "Dental", address: "Online Directory", phone: "N/A", info: "A tool provided by the Delta Dental Foundation to help Michigan residents find dentists who accept Medicaid or offer sliding-scale fees.", website: "https://www.smilehelpnow.com" },
  { name: "My Community Dental Centers (MCDC)", category: "Dental", address: "Multiple Locations", phone: "(877) 313-6232", info: "Partners with local health departments to provide dental services to Medicaid recipients and low-income uninsured residents across Michigan.", website: "https://www.mydental.org" },

  // Employment Services
  { name: "Manpower", category: "Employment", address: "12331 James Street, Unit 30, Holland", phone: "616-748-2000", info: "Employment services and job placement. M-F 8a-5p, Sa 8:45a-12:30p.", website: "https://www.manpowergroup.com" },
  { name: "Michigan Rehabilitation Services", category: "Employment", address: "121 Clover Street, Holland", phone: "616-395-8495", info: "Vocational rehabilitation services.", website: "https://www.michigan.gov/mrs" },
  { name: "West Michigan Works", category: "Employment", address: "121 Clover Street, Holland", phone: "616-396-2154", info: "Employment and training services. M-F 8a-5p.", website: "https://westmiworks.org" },
  { name: "Gill Staffing", category: "Employment", address: "12470 Felch St, Holland", phone: "616-396-1201", info: "Staffing and employment services.", website: "https://www.gillstaffing.com" },
  { name: "Workforce Employment Specialists", category: "Employment", address: "200 W 17th St, Holland", phone: "616-396-5557", info: "Employment placement and staffing solutions.", website: "https://www.teamworkforce.com" },
  { name: "Fettig Jobs", category: "Employment", address: "11449 James St, Holland", phone: "616-335-6770", info: "Employment services and job placement.", website: "https://www.fettig.jobs" },
  { name: "Workbox Staffing", category: "Employment", address: "100 S Harbor Dr, Grand Haven", phone: "616-844-0131", info: "Staffing and employment solutions.", website: "https://www.workboxstaffing.com" },
  { name: "WSI (Workforce Strategies)", category: "Employment", address: "12972 James St, Ste 40, Holland", phone: "616-325-1880", info: "Workforce development and employment strategies.", website: "https://www.wsitalent.com" },
  { name: "Coastal Careers", category: "Employment", address: "12656 Felch St, Holland", phone: "616-355-2244", info: "Career placement and staffing services.", website: "https://www.coastalcareersinc.com" },
  { name: "Cardinal Staffing", category: "Employment", address: "12330 James St, Ste H80, Holland", phone: "616-394-9100", info: "Employment staffing and placement services.", website: "https://www.cardinalstaffing.com" },
  { name: "WorkSolved", category: "Employment", address: "240 S River Ave, Holland", phone: "616-283-7521", info: "Employment solutions and staffing services.", website: "https://www.worksolved.com" },
  { name: "70x7 Life Recovery", category: "Employment", address: "97 W 22nd St, Holland, MI 49423", phone: "(616) 796-0685", info: "Specialized organization providing restoration and long-term support for individuals returning to the community after incarceration. Services include employment support with employer partnerships, mentorship, family support groups, life skills training, and housing assistance.", website: "https://70x7liferecovery.org" },
  { name: "Fresh Coast Alliance", category: "Employment", address: "1128 Roberts St, Muskegon, MI 49442", phone: "(231) 286-1992", info: "Muskegon-based non-profit specializing in employment placement through their 'Fresh Coast Cleaning' enterprise for individuals returning from incarceration and those in recovery from substance use. Also offers recovery housing and one-on-one recovery coaching.", website: "https://freshcoastalliance.org" },

  // Legal
  { name: "Legal Aid of Western Michigan", category: "Legal", address: "Holland Office", phone: "(616) 394-1380", info: "Provides free legal services for low-income residents in Allegan and Ottawa counties for non-criminal cases.", website: "https://lawestmi.org" },
  { name: "Legal Self-Help Center", category: "Legal", address: "Grand Haven Courthouse", phone: "(616) 846-8141", info: "Provides forms and instructions for individuals representing themselves in court.", website: "https://miottawa.org/courts/lshc" },
  { name: "MDOC Probation & Parole (Circuit Court)", category: "Legal", address: "Grand Haven Office: Grand Haven | Hudsonville Office: Hudsonville", phone: "Grand Haven: (616) 846-8320 | Hudsonville: (616) 662-6075", info: "Handles felony probation and parole services for Ottawa County.", website: "https://miottawa.org/courts/20th-circuit/probation-parole" },
  { name: "58th District Court Probation - Holland", category: "Legal", address: "Holland", phone: "(616) 355-4314", info: "Handles misdemeanor cases and programs like the Sobriety Treatment Program." },
  { name: "58th District Court Probation - Grand Haven", category: "Legal", address: "Grand Haven", phone: "(616) 846-8268", info: "Handles misdemeanor cases and programs like the Sobriety Treatment Program." },
  { name: "Friend of the Court", category: "Legal", address: "12240 Fillmore Street, Ste 150, West Olive, MI 49460", phone: "(877) 543-2660", info: "Handles domestic relations cases including child support, custody, and parenting time. Statewide IVR system - follow prompts for Ottawa County. Book phone appointments with caseworkers online via Setmore." },
  { name: "Lighthouse Immigrant Advocates (LIA)", category: "Legal", address: "Holland", phone: "(616) 298-8984", info: "Non-profit law office providing high-quality, low-cost legal services for immigrants and refugees. Services include DACA, naturalization, family-based petitions, and asylum assistance.", website: "https://lia-michigan.org" },
  { name: "Ottawa County Jail - Inmate Lookup", category: "Legal", address: "Ottawa County", phone: "Use online tool", info: "Search for individuals currently in custody through app.miottawa.org/InmateLookup. For status notifications (release/transfer), register at vinelink.com.", website: "https://app.miottawa.org/InmateLookup" },
  { name: "OK2SAY - Michigan Student Safety Program", category: "Legal", address: "Statewide Program", phone: "(855) 565-2729 (855-5-OK2SAY)", info: "Confidential reporting system for students, parents, and community members to report safety concerns 24/7. Report bullying, cyberbullying, threats, weapons, drug abuse, sexual assault, and other safety concerns. Trained Michigan State Police technicians handle reports and share with schools and local law enforcement.", website: "https://ok2say.com" },
  { name: "Silent Observer", category: "Legal", address: "Ottawa County - Three Regional Branches", phone: "(877) 887-4536 (877-88-SILENT)", info: "Non-profit anonymous tip line for serious crimes and criminal activity. Three regional branches serve: Northwest (Grand Haven, Spring Lake, Ferrysburg), Holland/Zeeland, and Eastern (Coopersville, Hudsonville). Submit tips via phone, web, or P3 Tips app with guaranteed anonymity - no caller ID or recordings.", website: "https://p3tips.com" },

  // Government Services
  { name: "Secretary of State", category: "Government Services", address: "Multiple locations", phone: "1-888-SOS-MICH (767-6424)", info: "Holland: 587 E 8th St; Hudsonville: 5211 Cherry Ave; Grand Haven: 1110 Robbins Rd. M,T,Th,F 9a-5p, W 11a-7p.", website: "https://www.michigan.gov/sos" },
  { name: "Social Security Administration", category: "Government Services", address: "657 Hastings Ave, Holland", phone: "1-877-223-6062", info: "Social security services. M-F 9a-4p.", website: "https://www.ssa.gov" },
];

// Second Chance Employment Modal Component
function SecondChanceModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-h-[90vh] overflow-y-auto w-full max-w-4xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-purple-600 text-white p-6 flex items-center justify-between border-b-4 border-purple-800">
          <h2 className="text-3xl font-bold">Second Chance Employment Agencies</h2>
          <button onClick={onClose} className="hover:bg-purple-700 p-2 rounded transition">
            <X size={28} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Introduction */}
          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
            <p className="text-gray-800 font-medium text-lg">
              Don&apos;t let your background hold you back. There are employers and agencies in Ottawa County that specialize in helping individuals with records find meaningful employment. Below are resources and tips to help you navigate your job search.
            </p>
          </div>

          {/* Agency 1: West Michigan Works */}
          <div className="bg-purple-100 border-b-4 border-purple-500 rounded-lg p-6 shadow-md">
            <div className="flex gap-2 mb-3 items-center">
              <span className="text-3xl">💼</span>
              <h3 className="text-2xl font-bold text-gray-900">West Michigan Works!</h3>
            </div>
            <p className="text-gray-700 mb-4 font-medium">The most comprehensive resource in the county with a dedicated Returning Citizens program.</p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Holland:</p>
                  <p className="text-gray-700">121 Clover Ave, Holland, MI 49423</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Grand Haven:</p>
                  <p className="text-gray-700">1445 Sheldon Rd, Grand Haven, MI 49417</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-purple-600 flex-shrink-0" />
                <a href="tel:616-396-2154" className="text-purple-700 font-bold hover:underline">(616) 396-2154</a>
              </div>
              <div className="bg-white p-4 rounded mt-3 border-l-4 border-purple-600">
                <p className="font-semibold text-gray-900 mb-2">How They Help:</p>
                <p className="text-gray-700">Offers &ldquo;Federal Bonding,&rdquo; which is a free insurance policy for employers that covers them if they hire a person with a record. Also provides leads on &ldquo;second chance&rdquo; employers in the region.</p>
              </div>
            </div>
          </div>

          {/* Agency 6: 70x7 Life Recovery */}
          <div className="bg-green-100 border-b-4 border-green-500 rounded-lg p-6 shadow-md">
            <div className="flex gap-2 mb-3 items-center">
              <span className="text-3xl">💼</span>
              <h3 className="text-2xl font-bold text-gray-900">70x7 Life Recovery</h3>
            </div>
            <p className="text-gray-700 mb-4 font-medium">Specialized organization providing restoration and long-term support for men and women returning to the community after incarceration.</p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Holland:</p>
                  <p className="text-gray-700">97 W 22nd St, Holland, MI 49423</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-green-600 flex-shrink-0" />
                <a href="tel:616-796-0685" className="text-green-700 font-bold hover:underline">(616) 796-0685</a>
              </div>
              <div className="flex gap-3 items-center">
                <Globe size={18} className="text-green-600 flex-shrink-0" />
                <a href="https://70x7liferecovery.org" target="_blank" rel="noopener noreferrer" className="text-green-700 font-bold hover:underline">70x7liferecovery.org</a>
              </div>
              <div className="bg-white p-4 rounded mt-3 border-l-4 border-green-600">
                <p className="font-semibold text-gray-900 mb-2">Programs & Services:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Employment Support:</strong> Partners with local employers to help graduates find stable, meaningful work</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Agency 7: Fresh Coast Alliance */}
          <div className="bg-blue-100 border-b-4 border-blue-500 rounded-lg p-6 shadow-md">
            <div className="flex gap-2 mb-3 items-center">
              <span className="text-3xl">💼</span>
              <h3 className="text-2xl font-bold text-gray-900">Fresh Coast Alliance</h3>
            </div>
            <p className="text-gray-700 mb-4 font-medium">Muskegon-based non-profit specializing in employment placement and recovery support for individuals returning from incarceration and those in substance use recovery.</p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Muskegon:</p>
                  <p className="text-gray-700">1128 Roberts St, Muskegon, MI 49442</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-blue-600 flex-shrink-0" />
                <a href="tel:231-286-1992" className="text-blue-700 font-bold hover:underline">(231) 286-1992</a>
              </div>
              <div className="flex gap-3 items-center">
                <Globe size={18} className="text-blue-600 flex-shrink-0" />
                <a href="https://freshcoastalliance.org" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-bold hover:underline">freshcoastalliance.org</a>
              </div>
              <div className="bg-white p-4 rounded mt-3 border-l-4 border-blue-600">
                <p className="font-semibold text-gray-900 mb-2">Programs & Services:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Fresh Coast Cleaning:</strong> Job placement through their cleaning enterprise with employer partnership</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Agency 8: Fettig.jobs */}
          <div className="bg-yellow-100 border-b-4 border-yellow-500 rounded-lg p-6 shadow-md">
            <div className="flex gap-2 mb-3 items-center">
              <span className="text-3xl">🏭</span>
              <h3 className="text-2xl font-bold text-gray-900">Fettig.jobs</h3>
            </div>
            <p className="text-gray-700 mb-4 font-medium">Established regional agency specializing in connecting workers with industrial and manufacturing roles, known for their personalized approach to candidate backgrounds.</p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Holland:</p>
                  <p className="text-gray-700">12465 James St #2, Holland, MI 49424</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-yellow-600 flex-shrink-0" />
                <a href="tel:616-335-6770" className="text-yellow-700 font-bold hover:underline">(616) 335-6770</a>
              </div>
              <div className="flex gap-3 items-center">
                <Globe size={18} className="text-yellow-600 flex-shrink-0" />
                <a href="https://fettig.jobs" target="_blank" rel="noopener noreferrer" className="text-yellow-700 font-bold hover:underline">fettig.jobs</a>
              </div>
              <div className="bg-white p-4 rounded mt-3 border-l-4 border-yellow-600">
                <p className="font-semibold text-gray-900 mb-2">Focus:</p>
                <p className="text-gray-700">Industrial and manufacturing roles with personalized approach to candidate backgrounds.</p>
              </div>
            </div>
          </div>

          {/* Agency 9: Forge Industrial Staffing */}
          <div className="bg-red-100 border-b-4 border-red-500 rounded-lg p-6 shadow-md">
            <div className="flex gap-2 mb-3 items-center">
              <span className="text-3xl">⚙️</span>
              <h3 className="text-2xl font-bold text-gray-900">Forge Industrial Staffing</h3>
            </div>
            <p className="text-gray-700 mb-4 font-medium">Local staffing agency specializing in entry-level labor and manufacturing jobs. Focuses on current ability to perform work with many accessible opportunities for those with past convictions.</p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Holland:</p>
                  <p className="text-gray-700">520 Butternut Dr, Holland, MI 49424</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-red-600 flex-shrink-0" />
                <a href="tel:616-393-8800" className="text-red-700 font-bold hover:underline">(616) 393-8800</a>
              </div>
              <div className="flex gap-3 items-center">
                <Globe size={18} className="text-red-600 flex-shrink-0" />
                <a href="https://forgestaff.com" target="_blank" rel="noopener noreferrer" className="text-red-700 font-bold hover:underline">forgestaff.com</a>
              </div>
              <div className="bg-white p-4 rounded mt-3 border-l-4 border-red-600">
                <p className="font-semibold text-gray-900 mb-2">Focus:</p>
                <p className="text-gray-700">Entry-level manufacturing and labor positions with focus on current ability to perform work.</p>
              </div>
            </div>
          </div>

          {/* Agency 10: Cascade Engineering */}
          <div className="bg-pink-100 border-b-4 border-pink-500 rounded-lg p-6 shadow-md">
            <div className="flex gap-2 mb-3 items-center">
              <span className="text-3xl">🌱</span>
              <h3 className="text-2xl font-bold text-gray-900">Cascade Engineering</h3>
            </div>
            <p className="text-gray-700 mb-4 font-medium">National leader in the "Returning Citizens" movement based in Grand Rapids. Features a formalized program designed specifically to hire and support individuals transitioning from the correctional system.</p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-pink-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Grand Rapids:</p>
                  <p className="text-gray-700">5175 36th St SE, Grand Rapids, MI 49512</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-pink-600 flex-shrink-0" />
                <a href="tel:616-975-4800" className="text-pink-700 font-bold hover:underline">(616) 975-4800</a>
              </div>
              <div className="flex gap-3 items-center">
                <Globe size={18} className="text-pink-600 flex-shrink-0" />
                <a href="https://cascadeng.com" target="_blank" rel="noopener noreferrer" className="text-pink-700 font-bold hover:underline">cascadeng.com</a>
              </div>
              <div className="bg-white p-4 rounded mt-3 border-l-4 border-pink-600">
                <p className="font-semibold text-gray-900 mb-2">Program:</p>
                <p className="text-gray-700">Formalized program specifically designed to hire and support individuals transitioning from the correctional system.</p>
              </div>
            </div>
          </div>

          {/* Agency 11: Pure Michigan Talent Connect */}
          <div className="bg-orange-100 border-b-4 border-orange-500 rounded-lg p-6 shadow-md">
            <div className="flex gap-2 mb-3 items-center">
              <span className="text-3xl">🌐</span>
              <h3 className="text-2xl font-bold text-gray-900">Pure Michigan Talent Connect</h3>
            </div>
            <p className="text-gray-700 mb-4 font-medium">Official statewide portal for job seekers and employers, featuring a dedicated section for "Returning Citizens" with resources on the Fidelity Bonding Program and tools to find employers actively participating in second-chance hiring.</p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-orange-600 flex-shrink-0" />
                <a href="tel:800-285-9675" className="text-orange-700 font-bold hover:underline">(800) 285-WORKS (9675)</a>
              </div>
              <div className="flex gap-3 items-center">
                <Globe size={18} className="text-orange-600 flex-shrink-0" />
                <a href="https://mitalent.org/returning-citizens" target="_blank" rel="noopener noreferrer" className="text-orange-700 font-bold hover:underline">mitalent.org/returning-citizens</a>
              </div>
              <div className="bg-white p-4 rounded mt-3 border-l-4 border-orange-600">
                <p className="font-semibold text-gray-900">Statewide Resources:</p>
                <ul className="text-gray-700 space-y-1 mt-2">
                  <li>• Fidelity Bonding Program information</li>
                  <li>• Directory of second-chance employers</li>
                  <li>• Job search tools for returning citizens</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Tips Section */}
          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Tips for Your Job Search</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold text-lg flex-shrink-0">→</span>
                <div>
                  <p className="font-semibold">Federal Bonding Program:</p>
                  <p>Mention to any agency or employer that you are eligible for the Federal Bonding Program through Michigan Works! This can often mitigate an employer&apos;s concerns about liability.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold text-lg flex-shrink-0">→</span>
                <div>
                  <p className="font-semibold">Honesty is Vital:</p>
                  <p>Most &ldquo;felony friendly&rdquo; agencies emphasize that they can work with you as long as you disclose your record upfront. Surprises during a background check usually lead to an automatic &ldquo;no.&rdquo;</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold text-lg flex-shrink-0">→</span>
                <div>
                  <p className="font-semibold">Manufacturing and Trades:</p>
                  <p>Ottawa County is a manufacturing hub. Large companies in Holland, Zeeland, and Grand Haven (like Gentex, Herman Miller, or Haworth) occasionally work with specialized staffing agencies to fill &ldquo;second chance&rdquo; roles.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Close Button at Bottom */}
        <div className="sticky bottom-0 bg-white border-t-2 border-purple-200 p-4 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-lg transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showSecondChanceModal, setShowSecondChanceModal] = useState(false);

  const categories = ['All', ...Array.from(new Set(RESOURCES.map(r => r.category))).sort()];
  
  const filtered = RESOURCES.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) || r.info.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => a.name.localeCompare(b.name));

  const getCategoryColor = (category: string) => {
    const colors: Record<string, { bg: string; border: string; icon: string; button: string; buttonHover: string }> = {
      "Mental Health": { bg: "bg-blue-100", border: "border-b-4 border-blue-500", icon: "🧠", button: "bg-blue-500 hover:bg-blue-600", buttonHover: "text-white" },
      "Substance Recovery": { bg: "bg-orange-100", border: "border-b-4 border-orange-500", icon: "���️", button: "bg-orange-500 hover:bg-orange-600", buttonHover: "text-white" },
      "Medication-Assisted Treatment": { bg: "bg-teal-100", border: "border-b-4 border-teal-600", icon: "💊", button: "bg-teal-600 hover:bg-teal-700", buttonHover: "text-white" },
      "Food": { bg: "bg-green-100", border: "border-b-4 border-green-500", icon: "🍽️", button: "bg-green-500 hover:bg-green-600", buttonHover: "text-white" },
      "Housing": { bg: "bg-amber-100", border: "border-b-4 border-amber-500", icon: "🏠", button: "bg-amber-500 hover:bg-amber-600", buttonHover: "text-white" },
      "Health Care": { bg: "bg-red-100", border: "border-b-4 border-red-500", icon: "🏥", button: "bg-red-500 hover:bg-red-600", buttonHover: "text-white" },
      "Prenatal/Maternal": { bg: "bg-pink-200", border: "border-b-4 border-pink-600", icon: "🤰", button: "bg-pink-600 hover:bg-pink-700", buttonHover: "text-white" },
      "Dental": { bg: "bg-sky-100", border: "border-b-4 border-sky-500", icon: "🦷", button: "bg-sky-500 hover:bg-sky-600", buttonHover: "text-white" },
      "Domestic Violence": { bg: "bg-rose-100", border: "border-b-4 border-rose-600", icon: "🛑", button: "bg-rose-600 hover:bg-rose-700", buttonHover: "text-white" },
      "Employment": { bg: "bg-purple-100", border: "border-b-4 border-purple-500", icon: "💼", button: "bg-purple-500 hover:bg-purple-600", buttonHover: "text-white" },
      "Senior Services": { bg: "bg-pink-100", border: "border-b-4 border-pink-500", icon: "👴", button: "bg-pink-500 hover:bg-pink-600", buttonHover: "text-white" },
      "Veteran Services": { bg: "bg-indigo-100", border: "border-b-4 border-indigo-500", icon: "🎖����", button: "bg-indigo-500 hover:bg-indigo-600", buttonHover: "text-white" },
      "Transportation": { bg: "bg-cyan-100", border: "border-b-4 border-cyan-500", icon: "🚌", button: "bg-cyan-500 hover:bg-cyan-600", buttonHover: "text-white" },
      "Financial Resources": { bg: "bg-yellow-100", border: "border-b-4 border-yellow-500", icon: "💰", button: "bg-yellow-500 hover:bg-yellow-600", buttonHover: "text-white" },
      "Overdose Prevention/Free Naloxone(Narcan)": { bg: "bg-red-200", border: "border-b-4 border-red-700", icon: "⚠️", button: "bg-red-700 hover:bg-red-800", buttonHover: "text-white" },
      "Harm Reduction": { bg: "bg-lime-100", border: "border-b-4 border-lime-600", icon: "🤝", button: "bg-lime-600 hover:bg-lime-700", buttonHover: "text-white" },
      "Miscellaneous": { bg: "bg-gray-100", border: "border-b-4 border-gray-400", icon: "📍", button: "bg-gray-400 hover:bg-gray-500", buttonHover: "text-white" },
      "Government Services": { bg: "bg-slate-100", border: "border-b-4 border-slate-500", icon: "🏛️", button: "bg-slate-500 hover:bg-slate-600", buttonHover: "text-white" },
    };
    return colors[category] || { bg: "bg-gray-100", border: "border-b-4 border-gray-400", icon: "📍", button: "bg-gray-400 hover:bg-gray-500", buttonHover: "text-white" };
  };

  return (
    <>
      <div className="bg-red-600 text-white py-3 px-4 text-center sticky top-0 z-50 font-bold flex items-center justify-center gap-4 flex-wrap">
        <span>CALL <a href="tel:211" className="underline font-bold">2-1-1</a> FOR LOCAL RESOURCES</span>
        <span className="hidden sm:inline">•</span>
        <span>FOR LIFE-THREATENING EMERGENCIES, CALL <a href="tel:911" className="underline font-bold">9-1-1</a></span>
      </div>

      <header className="bg-gradient-to-b from-teal-50 to-white border-b-4 border-teal-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col items-center gap-12 text-center">
            {/* Logo */}
            <Link href="/">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Recovery%20Alliance%20Business%20Cards-UXhe7EFsenUbcy44EqMjYgUa3HNUT3.jpg"
                alt="Ottawa County Recovery Alliance"
                className="h-96 w-96 object-contain cursor-pointer hover:opacity-80 transition bg-transparent"
              />
            </Link>
            
            {/* Main Title with WordArt Outline Effect */}
            <div className="space-y-6 max-w-3xl">
              <h1 
                className="text-5xl md:text-7xl font-bold text-teal-700 leading-tight"
                style={{
                  WebkitTextStroke: '3px #0D7377',
                  textStroke: '3px #0D7377',
                }}
              >
                Ottawa County Recovery Resource and Education Hub
              </h1>
              
              {/* Tagline/Welcome Message */}
              <div className="bg-teal-100 border-l-4 border-teal-600 p-8 rounded-lg">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                  Welcome to your central destination for healing, education, and community support. This one stop shop provides essential information on various substances alongside connections to local treatment. We believe recovery requires a solid foundation, so we also link you to vital resources like housing, mental health services, and financial assistance. Our goal is to help every resident build an informed and stable path forward.
                </p>
              </div>
            </div>
            
            {/* Navigation Buttons - Uniform and Centered */}
            <div className="flex gap-4 flex-wrap justify-center pt-6">
              <Link href="/">
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-3 rounded-lg transition text-lg min-w-44">Resources</button>
              </Link>
              <Link href="/education">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-lg transition text-lg min-w-44">Education</button>
              </Link>
              <Link href="/support-groups">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-lg transition text-lg min-w-44">Support Groups</button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border-2 border-teal-300 p-4 rounded text-lg"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
          {categories.map((cat) => {
            const colors = getCategoryColor(cat);
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded font-semibold transition text-center ${
                  selectedCategory === cat 
                    ? `${colors.button} text-white` 
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {selectedCategory === 'Substance Recovery' && (
          <div className="mb-8 p-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Medication-Assisted Treatment Options</h3>
            <p className="mb-4">For evidence-based medication-assisted treatment providers in the area, visit our dedicated MAT resources page.</p>
            <Link href="/mat-resources">
              <button className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-6 py-3 rounded-lg transition text-lg">
                View MAT Providers
              </button>
            </Link>
          </div>
        )}

        {selectedCategory === 'Domestic Violence' && (
          <div className="mb-8 p-6 bg-gradient-to-r from-rose-600 to-red-600 text-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Get Help for Domestic Violence</h3>
            <p className="mb-4">If you or someone you know is experiencing domestic violence, comprehensive support and emergency services are available. Visit our dedicated resources page for crisis lines and shelter information.</p>
            <Link href="/domestic-violence-resources">
              <button className="bg-white text-rose-600 hover:bg-rose-50 font-bold px-6 py-3 rounded-lg transition text-lg">
                View Domestic Violence Resources
              </button>
            </Link>
          </div>
        )}

        {selectedCategory === 'Food' && (
          <div className="mb-8 space-y-6">
            <div className="p-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Find Food Assistance</h3>
              <p className="mb-4">Looking for food resources in Ottawa County, MI? Explore nearby food pantries, food banks, and community resources offering free or low-cost options.</p>
              <a 
                href="https://ottawafood.org/findfood/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-600 hover:bg-green-50 font-bold px-6 py-3 rounded-lg transition text-lg"
              >
                Click Here to Find Food
              </a>
            </div>

            <div className="p-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Double Up Food Bucks 2026</h3>
              <p className="mb-4">Learn about the 2026 Double Up Food Bucks program with major updates including unlimited earn & spend, frozen produce inclusion, and expanded access to fresh produce at farmers markets and grocery stores across Ottawa County.</p>
              <a 
                href="/double-up-food-bucks"
                className="inline-block bg-white text-amber-600 hover:bg-amber-50 font-bold px-6 py-3 rounded-lg transition text-lg"
              >
                Learn More About Double Up Food Bucks
              </a>
            </div>
          </div>
        )}

        {selectedCategory === 'Employment' && (
          <div className="mb-8 p-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Looking for Employment with a Criminal Background?</h3>
            <p className="mb-4">Worried your background will prevent you from getting a job? You&apos;re not alone. There are employers and agencies in Ottawa County that specialize in helping individuals with records find meaningful employment. We&apos;ve compiled a list of &quot;second chance&quot; employment agencies and resources specifically designed to support you.</p>
            <button 
              onClick={() => setShowSecondChanceModal(true)}
              className="bg-white text-purple-600 hover:bg-purple-50 font-bold px-6 py-3 rounded-lg transition text-lg"
            >
              View Second Chance Employment Resources
            </button>
          </div>
        )}

        {selectedCategory === 'Legal' && (
          <div className="mb-8 p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Legal Resources & Support</h3>
            <p className="mb-4">Ottawa County offers a variety of legal assistance services, from affordable legal representation to court self-help resources. Whether you need help with probation, immigration, domestic relations, or criminal matters, these resources can help guide you through the legal process.</p>
          </div>
        )}

        {selectedCategory === 'Transportation' && (
          <div className="mb-8 space-y-6">
            {/* Medicaid Transportation Section */}
            <div className="p-6 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Have Medicaid and Need a Ride to Your Appointment?</h3>
              <p className="mb-4 font-medium">In Michigan, Non-Emergency Medical Transportation (NEMT) is a covered benefit for Medicaid members. To reserve a ride, contact your health plan's transportation vendor at least 2 to 3 business days before your appointment.</p>
              
              {/* Medicaid Plans Table */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="overflow-x-auto">
                  <table className="w-full text-gray-800 text-sm">
                    <thead className="bg-teal-50 border-b-2 border-teal-300">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold">Health Plan</th>
                        <th className="px-4 py-3 text-left font-bold">Reservation Phone</th>
                        <th className="px-4 py-3 text-left font-bold">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-teal-50">
                        <td className="px-4 py-3 font-semibold">Aetna Better Health</td>
                        <td className="px-4 py-3 text-teal-700 font-bold">(866) 316-3784</td>
                        <td className="px-4 py-3 text-gray-600">Mon–Fri, 8 AM – 5 PM</td>
                      </tr>
                      <tr className="border-b hover:bg-teal-50">
                        <td className="px-4 py-3 font-semibold">Blue Cross Complete</td>
                        <td className="px-4 py-3 text-teal-700 font-bold">(888) 803-4947</td>
                        <td className="px-4 py-3 text-gray-600">Available 24/7; managed by MTMHAP</td>
                      </tr>
                      <tr className="border-b hover:bg-teal-50">
                        <td className="px-4 py-3 font-semibold">CareSource</td>
                        <td className="px-4 py-3 text-teal-700 font-bold">(833) 230-2053</td>
                        <td className="px-4 py-3 text-gray-600">Schedule 2 business days in advance</td>
                      </tr>
                      <tr className="border-b hover:bg-teal-50">
                        <td className="px-4 py-3 font-semibold">McLaren Health Plan</td>
                        <td className="px-4 py-3 text-teal-700 font-bold">(888) 327-0671</td>
                        <td className="px-4 py-3 text-gray-600">Call 2–3 business days prior</td>
                      </tr>
                      <tr className="border-b hover:bg-teal-50">
                        <td className="px-4 py-3 font-semibold">Meridian Health Plan</td>
                        <td className="px-4 py-3 text-teal-700 font-bold">(800) 821-9369</td>
                        <td className="px-4 py-3 text-gray-600">Managed by Modivcare</td>
                      </tr>
                      <tr className="border-b hover:bg-teal-50">
                        <td className="px-4 py-3 font-semibold">Molina Healthcare</td>
                        <td className="px-4 py-3 text-teal-700 font-bold">(888) 898-7969</td>
                        <td className="px-4 py-3 text-gray-600">Available 24/7</td>
                      </tr>
                      <tr className="border-b hover:bg-teal-50">
                        <td className="px-4 py-3 font-semibold">Priority Health</td>
                        <td className="px-4 py-3 text-teal-700 font-bold">(888) 975-8102</td>
                        <td className="px-4 py-3 text-gray-600">Local: (616) 575-8102</td>
                      </tr>
                      <tr className="hover:bg-teal-50">
                        <td className="px-4 py-3 font-semibold">UnitedHealthcare</td>
                        <td className="px-4 py-3 text-teal-700 font-bold">(800) 903-5253</td>
                        <td className="px-4 py-3 text-gray-600">Call Member Services to schedule</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="mt-4 text-sm text-teal-100">Information as of April 2026</p>
            </div>
          </div>
        )}

        {selectedCategory === 'Housing' && (
          <div className="mb-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Good Samaritan Housing Search Packet</h3>
            <p className="mb-4">Get step-by-step guidance to help you in your housing search. This comprehensive packet includes tips, resources, and important information for finding affordable housing.</p>
            <a 
              href="https://goodsamottawa.org/wp-content/uploads/2025/09/Housing-Search-Packet.August.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold px-6 py-3 rounded-lg transition text-lg"
            >
              Download Housing Search Packet
            </a>
            <p className="mt-3 text-sm text-blue-100">Updated August 2025</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map((resource, idx) => {
              const colors = getCategoryColor(resource.category);
              return (
                <div key={idx} className={`${colors.bg} ${colors.border} rounded-lg shadow-md hover:shadow-lg p-6 transition transform hover:scale-105`}>
                  <div className="flex gap-2 mb-3 items-center">
                    <span className="text-2xl">{colors.icon}</span>
                    <h3 className="text-lg font-bold text-gray-900">{resource.name}</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">{resource.info}</p>
                  <div className="space-y-3 text-sm">
                    {resource.address && (
                      <div className="flex gap-3 items-start">
                        <MapPin size={18} className="text-teal-600 flex-shrink-0 mt-0.5" />
                        <a 
                          href={`https://maps.google.com/?q=${encodeURIComponent(resource.address.replace(/<[^>]*>/g, ''))}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-700 hover:underline"
                          dangerouslySetInnerHTML={{ __html: resource.address }}
                        ></a>
                      </div>
                    )}
                    {resource.phone !== "See Locations" && (
                      <div className="flex gap-3 items-center">
                        <Phone size={18} className="text-teal-600 flex-shrink-0" />
                        <PhoneLink phoneNumber={resource.phone} displayText={resource.phone} />
                      </div>
                    )}
                    {resource.website && (
                      <div className="flex gap-3 items-center">
                        <Globe size={18} className="text-teal-600 flex-shrink-0" />
                        <a href={resource.website} target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold hover:underline">
                          {(() => {
                            try {
                              return new URL(resource.website).hostname.replace('www.', '');
                            } catch {
                              return resource.website;
                            }
                          })()}
                        </a>
                      </div>
                    )}
                    {resource.hours && (
                      <div className="pt-2 border-t border-gray-300">
                        <p className="text-gray-800"><span className="font-bold">{resource.officeAddress ? 'Restore Hours:' : 'Hours:'}</span> {resource.hours}</p>
                      </div>
                    )}
                    {resource.officeAddress && (
                      <div className="pt-3 border-t border-gray-300 mt-3">
                        <div className="flex gap-3 items-start">
                          <MapPin size={18} className="text-teal-600 flex-shrink-0 mt-0.5" />
                          <a 
                            href={`https://maps.google.com/?q=${encodeURIComponent(resource.officeAddress.replace(/Office, /, '').replace(/Spring Lake, /, ''))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-700 hover:underline"
                          >
                            {resource.officeAddress}
                          </a>
                        </div>
                      </div>
                    )}
                    {resource.officePhone && (
                      <div className="flex gap-3 items-center">
                        <Phone size={18} className="text-teal-600 flex-shrink-0" />
                        <PhoneLink phoneNumber={resource.officePhone} displayText={resource.officePhone} />
                      </div>
                    )}
                    {resource.officeWebsite && (
                      <div className="flex gap-3 items-center">
                        <Globe size={18} className="text-teal-600 flex-shrink-0" />
                        <a href={resource.officeWebsite} target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold hover:underline">
                          {(() => {
                            try {
                              return new URL(resource.officeWebsite).hostname.replace('www.', '');
                            } catch {
                              return resource.officeWebsite;
                            }
                          })()}
                        </a>
                      </div>
                    )}
                    {resource.officeHours && (
                      <div className="pt-2">
                        <p className="text-gray-800"><span className="font-bold">Restore Hours:</span> {resource.officeHours}</p>
                      </div>
                    )}
                    {resource.officeDescription && (
                      <div className="pt-3 border-t border-gray-300 mt-3">
                        <p className="text-sm text-gray-700">{resource.officeDescription}</p>
                      </div>
                    )}
                  </div>
                  {resource.link ? (
                    <Link href={resource.link}>
                      <button className="block mt-4 w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 rounded text-center transition cursor-pointer">
                        See Locations
                      </button>
                    </Link>
                  ) : (
                    <a 
                      href={`tel:${resource.phone}`}
                      onClick={(e) => {
                        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                        if (!isMobile) {
                          e.preventDefault();
                          navigator.clipboard.writeText(resource.phone);
                          alert(`Phone number copied: ${resource.phone}`);
                        }
                      }}
                      className="block mt-4 w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 rounded text-center transition cursor-pointer"
                    >
                      Call Now
                    </a>
                  )}
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              No resources found. Try adjusting your search.
            </div>
          )}
        </div>
      </main>

      <Footer />
      <SecondChanceModal isOpen={showSecondChanceModal} onClose={() => setShowSecondChanceModal(false)} />
    </>
  )
}
