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
}

// Phone Call Handler Component
function PhoneLink({ phoneNumber, displayText }: { phoneNumber: string; displayText: string }) {
  const [copied, setCopied] = useState(false);

  const handlePhoneClick = () => {
    // Try to detect if on mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // On mobile, use tel: protocol
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // On desktop, copy to clipboard and show feedback
      navigator.clipboard.writeText(phoneNumber).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <button
      onClick={handlePhoneClick}
      className="text-teal-700 font-bold hover:underline cursor-pointer"
      title={isMobile ? "Click to call" : "Click to copy phone number"}
    >
      {displayText}
      {copied && <span className="ml-2 text-sm text-green-600">(Copied!)</span>}
    </button>
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
  { name: "Pine Rest Holland", category: "Mental Health", address: "926 S. Washington #210, Holland", phone: "616-820-3780", info: "Mental health and psychiatric services. M-Th 8:30a-8p, F 8:30a-3p.", website: "https://www.pinerest.org" },
  { name: "Pine Rest North Shore", category: "Mental Health", address: "17325 Van Wagoner Rd, Spring Lake", phone: "616-847-5145", info: "Mental health services. M-Th 8a-6:30p, F 8a-3p.", website: "https://www.pinerest.org" },
  { name: "Pine Rest Grand Rapids Psychiatric Urgent Care", category: "Mental Health", address: "300 68th Street SE Bldg E, Grand Rapids", phone: "616-455-9200", info: "Psychiatric urgent care. 10a-8p daily.", website: "https://www.pinerest.org" },
  { name: "Encourage Counseling", category: "Mental Health", address: "607 Heritage Court, Holland", phone: "616-396-6172", info: "Professional counseling services. M 9a-6p, Tu-Th 8:30a-6p.", website: "https://encouragecounseling.com" },
  { name: "Beacon of Hope Christian Counseling Holland", category: "Mental Health", address: "225 W. 30th St, Holland", phone: "616-594-5380", info: "Christian counseling services.", website: "https://beaconofhopecc.org" },
  { name: "Beacon of Hope Christian Counseling Grandville", category: "Mental Health", address: "6265 8th Ave, Grandville", phone: "616-594-5380", info: "Christian counseling services.", website: "https://beaconofhopecc.org" },
  { name: "Bethany Christian Services Holland", category: "Mental Health", address: "11335 James St, Holland", phone: "616-396-0623", info: "Christian counseling and services. M-Th 10a-9p, F 10a-3p.", website: "https://www.bethanycc.org" },
  { name: "Bethany Christian Services Grand Haven", category: "Mental Health", address: "1475 Robbins Rd, Grand Haven", phone: "616-396-0623", info: "Christian counseling and services. M-Th 9a-8p.", website: "https://www.bethanycc.org" },
  { name: "City On A Hill Ministries", category: "Mental Health", address: "100 Pine St STE 175, Zeeland, MI 49464", phone: "(616) 748-6060", info: "Multi-service community hub with health clinic providing free or low-cost medical and dental care, collaborative support services, and resource referral. M-F 9a-4p.", website: "https://www.coahm.org" },
  { name: "Counseling Center of West Michigan - Holland Campus", category: "Mental Health", address: "3124 N Wellness Dr # 50, Holland, MI 49424", phone: "(616) 805-3660 ext. 1201", info: "Diverse counseling for children, teens, and adults. Specialized therapy for couples and families, large provider network with evening and Saturday availability. M-F 8a-8p, Sat 8a-2p.", website: "https://www.counselingcenterwm.org" },
  { name: "Mosaic Counseling - Grand Haven", category: "Mental Health", address: "1703 S. Despelder St., Grand Haven", phone: "616-842-9160", info: "Professional counseling. M-F 9a-4p.", website: "https://mosaiccounseling.com" },
  { name: "Mosaic Counseling - Holland", category: "Mental Health", address: "503 Century Ln, Holland, MI 49423", phone: "616-842-9160", info: "Professional counseling. M-F 9a-4p.", website: "https://mosaiccounseling.com" },
  { name: "Trinity Health Hospital ER", category: "Mental Health", address: "1500 E. Sherman Blvd., Muskegon", phone: "231-672-2000", info: "Secured psychiatric facility emergency services.", website: "https://www.trinity-health.org" },
  { name: "Winning At Home", category: "Mental Health", address: "300 S State St STE 13, Zeeland, MI 49464", phone: "(616) 772-1733", info: "Professional counseling for individuals, couples, and families. Includes coaching, wellness programs, workshops on parenting and marriage, and online resources. M-Th 8a-8p, F 8a-3p.", website: "https://www.winningathome.com" },
  
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
  { name: "Resilience: Advocates for Ending Violence", category: "Domestic Violence", address: "411 Butternut Dr, Holland, MI 49424", phone: "(800) 848-5991", info: "Non-profit providing 24-hour crisis support, emergency shelter, counseling, legal advocacy, and community education for survivors of domestic and sexual violence. M-F 9a-5p, emergency services 24/7.", website: "https://www.resiliencemi.org" },
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
  { name: "LOVE INC Allendale", category: "Food", address: "6633 Lake Michigan Dr, Allendale", phone: "616-895-5683", info: "Food pantry. M-F 9a-2p. Must bring photo ID and utility bill.", website: "https://loveincallegan.org" },
  { name: "Replenish GVSU Pantry", category: "Food", address: "Kirkhof Center 0074, Allendale", phone: "616-331-7867", info: "Food pantry for GVSU students only. M-F 12p-5p.", website: "https://www.gvsu.edu" },
  { name: "Coopersville Cares", category: "Food", address: "180 68th Ave N, Coopersville, MI 49404", phone: "616-997-8602", info: "Food pantry offering supplemental groceries and household essentials to local residents who meet income eligibility guidelines. Serves the Coopersville Public School district. M-Th 9a-2p, Food pantry: Tu & Th 10a-12p, Tu 5:30p-6:30p.", website: "https://coopersvillecares.org" },
  { name: "LOVE INC Grand Haven", category: "Food", address: "326 Ferry St, Grand Haven", phone: "616-846-2701", info: "Food pantry. M-F 9a-5p.", website: "https://loveincallegan.org" },
  { name: "The People Center", category: "Food", address: "307 E Exchange St, Spring Lake, MI 49456", phone: "(616) 844-6710", info: "Food pantry offering supplemental groceries to residents in the Spring Lake, Ferrysburg, and Grand Haven areas. M, W, F 11a-5p.", website: "https://www.thepeoplecenter.org" },
  { name: "St. John's Episcopal Church", category: "Food", address: "524 Washington Ave, Grand Haven", phone: "616-842-6260 ext 21", info: "Free take-home meals W 5:30p-6:30p, Sun 1p-2p.", website: "https://www.stjohnsgh.org" },
  { name: "The Salvation Army Grand Haven", category: "Food", address: "310 N Despelder St, Grand Haven", phone: "616-842-3380 ext 200", info: "Food pantry by appointment only. M-F 9a-3p.", website: "https://www.salvationarmyusa.org" },
  { name: "East Side Food Pantry", category: "Food", address: "995 E. 8th St, Holland", phone: "616-392-8559 ext 18", info: "Serves Holland Heights residents only. M & W 10a-11:30a, F 3p-4:30p.", website: "https://www.cityofholland.com" },
  { name: "Holland First Assembly of God", category: "Food", address: "1331 E. 16th St, Holland", phone: "616-396-5646", info: "Food pantry. Call for hours/appointments.", website: "https://hfag.com" },
  { name: "St. Vincent De Paul Center", category: "Food", address: "170 W. 13th St, Holland", phone: "616-394-0676", info: "Food pantry. M & W 3p-8p, Sat 12p-4p.", website: "https://svdpholland.org" },
  { name: "The Salvation Army Holland", category: "Food", address: "104 Clover St, Holland", phone: "616-392-4461", info: "Food pantry by appointment only.", website: "https://www.salvationarmyusa.org" },
  { name: "Community Action House", category: "Food", address: "345 W. 14th St, Holland", phone: "616-392-2368", info: "Food pantry by appointment only.", website: "https://www.chservices.org" },
  { name: "Holland Community Kitchen", category: "Food", address: "101 E. 13th St, Holland", phone: "616-566-1417", info: "Free community meals M-F 11a-12:30p, Sat & Sun 9a-10:30a.", website: "https://www.hollandandk.org" },
  { name: "Holland Drop In Center Mental Health Recovery", category: "Food", address: "636 Hastings Ave #120, Holland", phone: "616-355-2207", info: "Community meals and recovery support. M-Sat 9a-4p.", website: "https://www.hdic.org" },
  { name: "Ottawa Foods", category: "Food", address: "12251 James Street, Suite 400, Holland, MI 49424", phone: "616-393-5791", info: "Connect people to food resources and community support services.", website: "https://www.ottawafood.org" },
  { name: "Jehovah Jireh Ministries of West Michigan", category: "Food", address: "4055 VanBuren St, Hudsonville", phone: "616-209-7688", info: "Food pantry. W 11:30a-5:30p, Sat 8a-1p. Bring your own bags.", website: "https://jjministries.org" },
  { name: "Love Your Neighbor (Love INC of Hudsonville)", category: "Food", address: "3300 Van Buren St, Hudsonville", phone: "616-662-3300", info: "Faith-based clearinghouse model coordinating church resources. Food pantry providing access to supplemental groceries and household essentials. Life Skills program and personal care items available. M-F 9a-4p.", website: "https://loveinchudsonville.org" },
  { name: "The People Center", category: "Food", address: "307 E. Exchange, Spring Lake", phone: "616-844-6710", info: "Food pantry. M & W 11a-3p. Call first for appointment.", website: "https://www.thepeoplecenter.org" },
  { name: "Harvest Stand Ministries", category: "Food", address: "100 Pine St Ste 100, Zeeland", phone: "616-748-6003", info: "Food pantry. M 9a-3p, W 1p-6p, Th 9a-12p. By appointment.", website: "https://harveststandministries.org" },
  { name: "Lakeshore Habitat for Humanity", category: "Food", address: "12727 Riley St, Holland", phone: "616-393-8001", info: "Community resources and support.", website: "https://www.lakeshorehabitat.org" },
  { name: "MI Bridges", category: "Food", address: "State Program", phone: "1-888-544-8773", info: "State food assistance program.", website: "https://www.michigan.gov/mibridges" },

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
  { name: "Resilience: Advocates for Ending Violence", category: "Housing", address: "411 Butternut Dr, Holland, MI 49424", phone: "(800) 848-5991", info: "Emergency shelter for survivors of domestic and sexual violence. M-F 9a-5p, emergency services 24/7.", website: "https://www.resiliencemi.org" },
  { name: "Sylvia's Place", category: "Housing", address: "235 North St, Allegan, MI 49010", phone: "(269) 673-8700", info: "Emergency shelter for survivors of domestic violence and their children. 24-hour help line: (888) 411-7837.", website: "https://www.sylviasplace.com" },
  { name: "Tri-Cities Area Habitat For Humanity", category: "Housing", address: "3610 Airline Rd. Norton Shores, MI 49444", phone: "(616) 846-1505", info: "Provides affordable housing solutions through construction, home repairs, and financial education. Services include Homeownership Program (build/renovate houses with affordable mortgages), Home Repair Services for low-income homeowners, Habitat ReStore (donated building materials and furniture at discounted prices), and Financial Education on budgeting and credit.", website: "https://tricitieshabitat.com" },
  { name: "Lakeshore Habitat for Humanity", category: "Housing", address: "12727 Riley St, Holland, MI 49424", phone: "(616) 393-8001", info: "Serves the greater Holland area, creating affordable housing through new construction, home rehabilitation, and critical repairs. Services include Homeownership Program (sweat equity and financial education classes), Home Repair Services (exterior projects like siding and accessibility ramps), Habitat ReStore (home goods and building supplies with proceeds funding local builds), and Volunteer Advocacy opportunities.", website: "https://lakeshorehabitat.org" },

  // Health Care
  // Prenatal/Maternal
  { name: "Catholic Charities West Michigan", category: "Prenatal/Maternal", address: "456 Century Ln, Holland, MI 49423", phone: "(616) 796-9595", info: "Broad spectrum of family support services and point of distribution for child-related essentials including diapers, formula, and baby items.", website: "https://www.catholiccharitieswm.org" },
  { name: "Community Action House", category: "Prenatal/Maternal", address: "739 Paw Paw Dr, Holland, MI 49423", phone: "(616) 392-2368", info: "Community hub connecting families with essential supplies, nutrition, and maternal health programs. Hosts Help Me Grow: Play 'n Learn for birth to age 5, Chat & Chill support groups, Healthy@Home nutrition program, Food Club, and partnerships with Maternal Infant Health Program and Nestlings for diapers. M-F 9a-5p.", website: "https://www.communityactionhouse.org" },
  { name: "Love INC of Hudsonville", category: "Prenatal/Maternal", address: "3300 Van Buren St, Hudsonville, MI 49426", phone: "(616) 662-3300", info: "Provides personal care items and infant essentials not typically covered by state assistance programs. Faith-based organization coordinating local church resources for families in need. M-F 9a-4p.", website: "https://loveinchudsonville.org" },
  { name: "Maternal Infant Health Program Grand Haven", category: "Prenatal/Maternal", address: "1207 S. Beechtree St., Grand Haven", phone: "616-846-8360", info: "Maternal and infant health services.", website: "https://www.cmhoc.org" },
  { name: "Maternal Infant Health Program Holland", category: "Prenatal/Maternal", address: "12251 James St, Holland", phone: "616-396-5266", info: "Maternal and infant health services.", website: "https://www.cmhoc.org" },
  { name: "Maternal Infant Health Program Hudsonville", category: "Prenatal/Maternal", address: "3100 Port Sheldon, Hudsonville", phone: "616-669-0040", info: "Maternal and infant health services.", website: "https://www.cmhoc.org" },
  { name: "The Salvation Army Holland Corps Community Center", category: "Prenatal/Maternal", address: "104 Clover St, Holland, MI 49423", phone: "(616) 392-4461", info: "Community center offering social services and emergency assistance, often including basic needs like diapers when supplies are available.", website: "https://www.salvationarmyusa.org" },

  // Health Care
  { name: "Holland Community Health Center", category: "Health Care", address: "336 S. River Ave, Holland", phone: "616-394-3788", info: "Primary and preventive health care. M-F 8a-5p.", website: "https://www.hollandcommunityhealthcenter.org" },
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

  // Senior Services
  { name: "The Little Red House", category: "Senior Services", address: "311 E. Exchange St, Spring Lake", phone: "616-846-5720", info: "Adult day care for elderly. M-F 7a-6p. Hourly rate includes meals.", website: "https://www.thelittleredhouse.org" },
  { name: "Senior Resources", category: "Senior Services", address: "560 Seminole Rd, Muskegon", phone: "231-733-8655", info: "Senior services for North Ottawa County. Toll Free: 1-800-442-0054.", website: "https://www.seniorresourceswmi.org" },
  { name: "Life Circles (PACE Partnership) South", category: "Senior Services", address: "12330 James St H-10, Holland", phone: "616-582-3114", info: "Senior care coordination and support.", website: "https://lifecircles-pace.org" },
  { name: "Evergreen Commons", category: "Senior Services", address: "Main: 480 State St, Holland, MI 49423 | Day Center: 55 W. 16th St, Holland, MI 49423", phone: "(616) 396-7100", info: "Community center for adults 55+ offering wellness & fitness (warm-water pool, fitness center, indoor track, pickleball courts, disease-specific programs like Parkinson's classes), life enrichment activities (clubs, art classes, music groups, travel), adult day center services, café dining, and caregiver support. Member Services: (616) 355-5120. M-F 8a-4p.", website: "https://www.evergreencommons.org" },
  { name: "Four Pointes Center for Successful Aging", category: "Senior Services", address: "1051 S. Beacon Blvd, Grand Haven", phone: "616-842-9210", info: "Senior services. M-Th 9a-3p.", website: "https://www.fourpointessenior.org" },
  { name: "CarePatrol of West MI Lakeshore", category: "Senior Services", address: "West Michigan", phone: "(231) 683-2002", info: "Senior placement for assisted/independent living, memory care, nursing homes.", website: "https://carepatrol.com/west-michigan-lakeshore/" },
  { name: "Senior Reach Ottawa County", category: "Senior Services", address: "Ottawa County", phone: "877-588-4357", info: "Services for adults 60 years old and older.", website: "https://miottawa.org/cmh/senior-reach/" },

  // Veteran Services
  { name: "Veterans Crisis Line", category: "Veteran Services", address: "National", phone: "1-800-273-8255 (press 1)", info: "Veteran crisis support available 24/7. Also text 838255.", website: "https://www.veteranscrisisline.net" },
  { name: "West Michigan Veterans Assistance Program", category: "Veteran Services", address: "620 Century Ave SW, Grand Rapids", phone: "Contact for details", info: "Food pantry, financial assistance, limited housing, education.", website: "https://www.wmvap.org" },
  { name: "Ottawa County Veteran Services", category: "Veteran Services", address: "12251 James St, Holland", phone: "616-393-8387", info: "Comprehensive veteran support services and assistance programs.", website: "https://miottawa.org/veterans-services/" },

  // Transportation
  { name: "Harbor Transit", category: "Transportation", address: "Grand Haven", phone: "616-842-3200", info: "Public transportation. M-F 6a-6p, Sat 9a-4p, Sun 8a-12:30p (Advanced reservation).", website: "https://harbortransit.org" },
  { name: "MAX Bus - Holland", category: "Transportation", address: "Holland", phone: "616-355-1025", info: "Public bus transportation serving Holland. Route schedules and real-time information available.", website: "https://catchamax.org" },

  // Financial Resources
  { name: "Community Action Agency", category: "Financial Resources", address: "Ottawa County", phone: "616-393-4433", info: "Financial assistance and support services for low-income families.", website: "https://www.miottawa.org/caa" },
  { name: "Community Action House", category: "Financial Resources", address: "739 Paw Paw Dr, Holland, MI 49423", phone: "616-392-2368", info: "Foreclosure intervention and financial wellness coaching.", website: "https://www.communityactionhouse.org" },
  { name: "Coopersville Cares", category: "Financial Resources", address: "180 68th Ave N, Coopersville, MI 49404", phone: "(616) 997-8602", info: "Emergency financial assistance for critical needs such as utility shut-off notices and rent assistance for those facing temporary crisis. Also provides food pantry, clothing center, and seasonal assistance programs. Serves the Coopersville Public School district. M-Th 9a-2p.", website: "https://coopersvillecares.org" },
  { name: "Good Samaritan Ministries", category: "Financial Resources", address: "513 E. 8th St, Holland", phone: "616-392-7159", info: "Housing Search Assistance, Rapid Re-housing, and CHP programs.", website: "https://www.gsministries.org" },
  { name: "Love INC Allendale", category: "Financial Resources", address: "6633 Lake Michigan Dr, Allendale, MI 49401", phone: "616-895-5683", info: "Local assistance and coordination for residents in Allendale.", website: "https://www.loveincofneottawa.org" },
  { name: "Love in Action (Tri-Cities)", category: "Financial Resources", address: "326 N Ferry St, Grand Haven, MI 49417", phone: "616-846-2701", info: "Financial assistance for rent or medical bills and financial wellness coaching.", website: "https://www.loveinactiontricities.org" },
  { name: "Michigan Department of Health & Human Services (MDHHS)", category: "Financial Resources", address: "Michigan", phone: "616-394-7200", info: "Cash assistance, State Emergency Relief (SER) for housing/utilities, and food assistance (SNAP).", website: "https://www.newmibridges.michigan.gov/s/isd-landing-page?language=en_US" },
  { name: "The People Center", category: "Financial Resources", address: "307 E Exchange St, Spring Lake, MI 49456", phone: "(616) 844-6710", info: "Financial assistance for emergency needs such as utility payments and other critical expenses. M, W, F 11a-5p.", website: "https://www.thepeoplecenter.org" },
  { name: "The Salvation Army", category: "Financial Resources", address: "310 N. Despelder St, Grand Haven", phone: "616-842-3380 ext 200", info: "Financial assistance including rent and utilities. M-F 9a-4p.", website: "https://www.salvationarmyusa.org" },
  { name: "Love INC of Hudsonville", category: "Financial Resources", address: "3300 Van Buren St, Hudsonville, MI 49426", phone: "(616) 662-3300", info: "Faith-based clearinghouse coordinating church resources. Provides emergency financial assistance and Life Skills program with budgeting and financial wellness coaching. Participants can earn vouchers/credit toward essentials through program participation. M-F 9a-4p.", website: "https://loveinchudsonville.org" },

  // Clothing and Furniture
  { name: "Coopersville Cares", category: "Clothing and Furniture", address: "180 68th Ave N, Coopersville, MI 49404", phone: "(616) 997-8602", info: "Clothing center maintaining a selection of affordable or free clothing items for children and adults. Serves the Coopersville Public School district. M-Th 9a-2p.", website: "https://coopersvillecares.org" },
  { name: "The Salvation Army Holland", category: "Clothing and Furniture", address: "104 Clover St, Holland", phone: "616-392-4461", info: "Thrift store offering affordable clothing and household items. Available by appointment.", website: "https://www.salvationarmyusa.org" },
  { name: "The Salvation Army Grand Haven", category: "Clothing and Furniture", address: "310 N Despelder St, Grand Haven", phone: "616-842-3380 ext 200", info: "Thrift store with clothing and household items. M-F 9a-3p.", website: "https://www.salvationarmyusa.org" },
  { name: "Covenant Life Care Ministry", category: "Clothing and Furniture", address: "Ottawa County", phone: "616-847-2540", info: "Builds and provides bunk beds and furniture for those in need. Also constructs wheelchair ramps.", website: "https://www.covenantlifecare.org" },
  { name: "Lakeshore Habitat for Humanity", category: "Clothing and Furniture", address: "12727 Riley St, Holland", phone: "616-393-8001", info: "Provides furniture and household goods through Re-Store locations. Community resources and support available.", website: "https://www.lakeshorehabitat.org" },
  { name: "Love INC of Hudsonville", category: "Clothing and Furniture", address: "3300 Van Buren St, Hudsonville, MI 49426", phone: "(616) 662-3300", info: "Provides access to clothing, linens, and household furniture through Essential Resource Ministries. Faith-based clearinghouse coordinating local church resources for the Hudsonville, Jenison, and Grandville areas. M-F 9a-4p.", website: "https://loveinchudsonville.org" },
  { name: "Habitat for Humanity ReStore Grand Haven", category: "Clothing and Furniture", address: "408 N Ferry St, Grand Haven, MI 49417", phone: "(616) 846-1505", info: "ReStore location offering affordable furniture and household goods. Hours: M-F 9:30 AM – 6:30 PM; Saturday 9:30 AM – 4:30 PM. Office hours: M-F 9:00 AM – 5:00 PM.", website: "https://tricitieshabitat.org" },

  // Prenatal and Baby Resources

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

          {/* Agency 2: Fettig */}
          <div className="bg-purple-100 border-b-4 border-purple-500 rounded-lg p-6 shadow-md">
            <div className="flex gap-2 mb-3 items-center">
              <span className="text-3xl">💼</span>
              <h3 className="text-2xl font-bold text-gray-900">Fettig</h3>
            </div>
            <p className="text-gray-700 mb-4 font-medium">Prominent West Michigan staffing agency widely recognized for working with individuals with backgrounds.</p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">400 136th Ave, Suite 105, Holland, MI 49424</p>
              </div>
              <div className="bg-white p-4 rounded mt-3 border-l-4 border-purple-600">
                <p className="font-semibold text-gray-900 mb-2">Focus:</p>
                <p className="text-gray-700">Industrial, manufacturing, and warehouse roles.</p>
              </div>
            </div>
          </div>

          {/* Agency 3: Forge Industrial Staffing */}
          <div className="bg-purple-100 border-b-4 border-purple-500 rounded-lg p-6 shadow-md">
            <div className="flex gap-2 mb-3 items-center">
              <span className="text-3xl">💼</span>
              <h3 className="text-2xl font-bold text-gray-900">Forge Industrial Staffing</h3>
            </div>
            <p className="text-gray-700 mb-4 font-medium">Local staffing agency with &ldquo;felony friendly&rdquo; openings, focusing on ability to work rather than past convictions.</p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">214 Clover Ave, Holland, MI 49423</p>
              </div>
              <div className="bg-white p-4 rounded mt-3 border-l-4 border-purple-600">
                <p className="font-semibold text-gray-900 mb-2">Focus:</p>
                <p className="text-gray-700">Entry-level manufacturing and labor jobs.</p>
              </div>
            </div>
          </div>

          {/* Agency 4: Cascade Engineering */}
          <div className="bg-purple-100 border-b-4 border-purple-500 rounded-lg p-6 shadow-md">
            <div className="flex gap-2 mb-3 items-center">
              <span className="text-3xl">💼</span>
              <h3 className="text-2xl font-bold text-gray-900">Cascade Engineering</h3>
            </div>
            <p className="text-gray-700 mb-4 font-medium">Major employer in West Michigan region and national leader in the &ldquo;Returning Citizens&rdquo; movement.</p>
            <div className="space-y-3 text-sm">
              <p className="text-gray-700"><strong>Main Hub:</strong> Grand Rapids (with regional presence)</p>
              <div className="bg-white p-4 rounded mt-3 border-l-4 border-purple-600">
                <p className="font-semibold text-gray-900 mb-2">Program:</p>
                <p className="text-gray-700">Formal program designed to hire and support individuals coming out of the correctional system.</p>
              </div>
            </div>
          </div>

          {/* Agency 5: Pure Michigan Talent Connect */}
          <div className="bg-purple-100 border-b-4 border-purple-500 rounded-lg p-6 shadow-md">
            <div className="flex gap-2 mb-3 items-center">
              <span className="text-3xl">💼</span>
              <h3 className="text-2xl font-bold text-gray-900">Pure Michigan Talent Connect</h3>
            </div>
            <p className="text-gray-700 mb-4 font-medium">Statewide online portal to find Second Chance employers and Returning Citizen resources.</p>
            <div className="space-y-3 text-sm">
              <div className="bg-white p-4 rounded border-l-4 border-purple-600">
                <p className="text-gray-700">You can specifically search for &ldquo;Second Chance&rdquo; employers or &ldquo;Returning Citizen&rdquo; resources. Filter for employers who utilize the Fidelity Bonding Program.</p>
              </div>
            </div>
          </div>

          {/* Agency 6: 70x7 Life Recovery */}
          <div className="bg-purple-100 border-b-4 border-purple-500 rounded-lg p-6 shadow-md">
            <div className="flex gap-2 mb-3 items-center">
              <span className="text-3xl">💼</span>
              <h3 className="text-2xl font-bold text-gray-900">70x7 Life Recovery</h3>
            </div>
            <p className="text-gray-700 mb-4 font-medium">Specialized organization providing restoration and long-term support for men and women returning to the community after incarceration.</p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Holland:</p>
                  <p className="text-gray-700">97 W 22nd St, Holland, MI 49423</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-purple-600 flex-shrink-0" />
                <a href="tel:616-796-0685" className="text-purple-700 font-bold hover:underline">(616) 796-0685</a>
              </div>
              <div className="flex gap-3 items-center">
                <Globe size={18} className="text-purple-600 flex-shrink-0" />
                <a href="https://70x7liferecovery.org" target="_blank" rel="noopener noreferrer" className="text-purple-700 font-bold hover:underline">70x7liferecovery.org</a>
              </div>
              <div className="bg-white p-4 rounded mt-3 border-l-4 border-purple-600">
                <p className="font-semibold text-gray-900 mb-2">Programs & Services:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Employment Support:</strong> Partners with local employers to help graduates find stable, meaningful work</li>
                  <li>• <strong>Stronger Together:</strong> Family support groups for loved ones impacted by incarceration</li>
                  <li>• <strong>Mentorship:</strong> Connects participants with mentors for guidance and accountability</li>
                  <li>• <strong>Life Skills & Classes:</strong> Programs like &ldquo;Take Charge&rdquo; for empowerment and practical skills</li>
                  <li>• <strong>Housing & Basic Needs:</strong> Assists in finding stable housing and essential items</li>
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
      "Substance Recovery": { bg: "bg-orange-100", border: "border-b-4 border-orange-500", icon: "🛡️", button: "bg-orange-500 hover:bg-orange-600", buttonHover: "text-white" },
      "Medication-Assisted Treatment": { bg: "bg-teal-100", border: "border-b-4 border-teal-600", icon: "💊", button: "bg-teal-600 hover:bg-teal-700", buttonHover: "text-white" },
      "Food": { bg: "bg-green-100", border: "border-b-4 border-green-500", icon: "🍽️", button: "bg-green-500 hover:bg-green-600", buttonHover: "text-white" },
      "Housing": { bg: "bg-amber-100", border: "border-b-4 border-amber-500", icon: "🏠", button: "bg-amber-500 hover:bg-amber-600", buttonHover: "text-white" },
      "Health Care": { bg: "bg-red-100", border: "border-b-4 border-red-500", icon: "🏥", button: "bg-red-500 hover:bg-red-600", buttonHover: "text-white" },
      "Prenatal/Maternal": { bg: "bg-pink-200", border: "border-b-4 border-pink-600", icon: "🤰", button: "bg-pink-600 hover:bg-pink-700", buttonHover: "text-white" },
      "Dental": { bg: "bg-sky-100", border: "border-b-4 border-sky-500", icon: "🦷", button: "bg-sky-500 hover:bg-sky-600", buttonHover: "text-white" },
      "Domestic Violence": { bg: "bg-rose-100", border: "border-b-4 border-rose-600", icon: "🛑", button: "bg-rose-600 hover:bg-rose-700", buttonHover: "text-white" },
      "Employment": { bg: "bg-purple-100", border: "border-b-4 border-purple-500", icon: "💼", button: "bg-purple-500 hover:bg-purple-600", buttonHover: "text-white" },
      "Senior Services": { bg: "bg-pink-100", border: "border-b-4 border-pink-500", icon: "👴", button: "bg-pink-500 hover:bg-pink-600", buttonHover: "text-white" },
      "Veteran Services": { bg: "bg-indigo-100", border: "border-b-4 border-indigo-500", icon: "🎖️", button: "bg-indigo-500 hover:bg-indigo-600", buttonHover: "text-white" },
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

        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map((cat) => {
            const colors = getCategoryColor(cat);
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded font-semibold transition ${
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

        {selectedCategory === 'Employment' && (
          <div className="mb-8 p-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Looking for Employment with a Criminal Background?</h3>
            <p className="mb-4">Worried your background will prevent you from getting a job? You&apos;re not alone. There are employers and agencies in Ottawa County that specialize in helping individuals with records find meaningful employment. We&apos;ve compiled a list of &ldquo;second chance&rdquo; employment agencies and resources specifically designed to support you.</p>
            <button 
              onClick={() => setShowSecondChanceModal(true)}
              className="bg-white text-purple-600 hover:bg-purple-50 font-bold px-6 py-3 rounded-lg transition text-lg"
            >
              View Second Chance Employment Resources
            </button>
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
                        <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: resource.address }}></span>
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
                        <a href={resource.website} target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold hover:underline">Visit Website</a>
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
