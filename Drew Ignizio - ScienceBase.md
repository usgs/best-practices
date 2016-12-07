##Refined Guidance will be Necessary to Help Authors Distinguish Between 'Data' and 'Software'
"Data" and "Software" fall neatly into two camps in some cases, but in many scenarios, these two types 
of resources may blur seamlessly into one another. Arguably, some processing files for scientific 
analysis (such as R or Python) scripts are never written or intended to be 'deployable software' in 
the same way that a versioned executable or web application may be. It may be appropriate in some cases 
to simply group these types of processing files or other similar resources into a "data release", 
document them with metadata, and not force authors to assume the same overhead that is necessary for 
a more dedicated software product. 

Guidance on navigating this distinction is going to be very valuable, and we will need to make sure we 
have flexibility in place to accomodate the various scenarios that will present themselves.

The 'spirit of the law' will be important here with the main goal being for authors to have an established 
way to publish (and cite) data and software. There may not be one right way to do things in every case 
but the desirable outcome should result in well-documented data and software being treated as a 
reference-able resource in their own right, with no more distinction about whether something is 'data' or 
'software' than is needed to be helpful.

##GitHub and USGS BitBucket (and DOIs)

There are dedicated hosting platforms that are designed to dovetail with Version Control Systems (VCS) such as Git 
that are widely used in professional software development. These include GitHub (www.github.com) which is 
non-federal hardware, and the USGS instance of a Git repository, https://my.usgs.gov/bitbucket, which does reside 
on federal hardware.

There are some advantages to GitHub (GitHub can render different file types such as '.ipynb' file types, the platform 
is already in use because it facilitates easy interdisciplinary collaboration between USGS and non-USGS personnel, 
and GitHub is widely accepted in the software community as an established and accepted way to distribute software) but 
it does not meet current guidance because it is not federally controlled hardware.

To address software authors' preference to use GitHub instead of BitBucket, it could be beneficial moving forward for 
the USGS to explore feature enhancement in BitBucket to improve some of the options for file display, etc.

Software authors who work in a version controlled environment with dynamic software maintained through code commits, 
version releases, and possibly in a shared environment with multiple developers will almost certainly benefit from 
working primarily against a repository that supports Git (or other VCS) integration. This would mean posting code 
to either GitHub or BitBucket as part of a regular workflow.

BitBucket-hosted code would meet current USGS requirements and would make sense to be the location against which a 
Digital Object Identifier (DOI) is issued, as that is where the actual resource resides. No other 'host page' would 
be necessary, although other policy considerations such as metadata submission to the Science Data Clearinghouse 
(if required) might need to be worked out.

For software projects that already reside on GitHub, the simplest path for authors would probably be to add a remote 
to the BitBucket location to meet federal requirements, mint a DOI to the BitBucket location, and sync their project 
to both remotes on a rolling basis.

##ScienceBase (and DOIs)
ScienceBase is a robust data sharing platform that *can* present a link off to a location in BitBucket or GitHub, 
but ScienceBase is not a version-controlled repository. For software that changes regularly, this system may not 
be the best option for authors as it does not readily handle commits and versioning; BitBucket is a superior 
option currently for these needs and meets federal hardware requirements. In this instance, an author would obtain 
a DOI that maps to the repo in BitBucket where the software is posted.

For software that does not change regularly, but that might represent a single collection of code or processing 
scripts, ScienceBase will be a good option for authors. The code can simply be posted as a collection of files 
into an item (with documentation) when VCS integration is not required. In this instance, the author would 
obtain a DOI that maps to the ScienceBase URL where the code is posted.

An alternative method to meet requirements for storage on federal hardware could also be to store software/code on 
GitHub and *manually* keep an up-to-date copy of that code in an item in ScienceBase. This process would have to 
be closely controlled by the author as ScienceBase was not designed as a VCS remote repository and the system would 
not automatically sync with GitHub. For software that changes relatively infrequently, a hybrid option like this 
could be an option for authors. Authors could also potentially automate the update of a content package on 
ScienceBase through the ScienceBase API.

At this point, minting a DOI against a URL in ScienceBase (or any other location) where the resource identified 
by the DOI does not actually reside seems like a poor practice. In any instance where a ScienceBase item does not 
actually store a copy of a described resource, the ScienceBase team does not recommend issuing a DOI against that item. 
In such an instance, any issues with access could create confusion and a potentially unresolvable connection to the 
resource. Additionally, a page in ScienceBase with a link off to another location (but no actual data resource) would 
not meet current guidance requirements for federal storage as the software would not actually reside in ScienceBase. 
These issues need consideration as they present complex challenges that intersect workflow, policy, and technical 
architecture.

I would encourage the USGS (and software developers) to consider minting DOIs only against a Universal Resource 
Locator (URL) where a described resource actually resides. 

##The USGS May Benefit from an Identified Group of Software Reviewers with Proper Experience

A qualified group of individuals with software experience and the ability to answer questions about code, 
software, and review guidance will be necessary. A programmer working in a given language would benefit 
from having other individuals familiar with that type of development to QC code, provide guidance, and 
conduct a meaningful review.

##Markdown Files, In-Code Documentation, and Associated Publications Collectively Comprise the Metadata for Software

Markdown is a very common file format for documentation in the software realm. "ReadMe.md" files are an established 
convention among the development community and the ability to display these files in an easy-to-read format is also 
well-supported. Documentation and guidance may benefit from allowing or encouraging software authors to provide a 
Markdown file alongside or in lieu of an XML file. In-code documentation is also incredibly important and should 
certainly be something reviewers look for. Associated manuscripts often also accompany software products, so proper 
guidance on how these should be paired (without asking authors to unduly repeat documentation, install instructions, 
usage notes, etc.) should be provided.

##Tracking all USGS Software Releases in a Coherent Manner Will Need Planning

If software are hosted in multiple locations (instead of a single established location for all USGS authors) it will 
be necessary for the Bureau to have a way to track all of these products. The USGS Information Product Delivery System 
(IPDS) may be the most logical spot to aggregate information on these resources. Any reporting needs or USGS goals in 
terms of tracking these software products would be good to articulate to ensure the proposed guidelines for authors will 
enable any necessary tracking or organized presentation of software resources. While all software products should have 
a DOI moving forward, these may map to various locations where the software are hosted. Convention for how these DOIs are 
issued would be beneficial to adopt. 

##As Guidance and Policy are Finalized Consider Test Cases
As guidance transitions into formal policy, the consideration of test cases (over the course of a year or so) could be 
very valuable. Circumstances that were previously not considered, unique cases that challenge definitions and prescribed 
workflows, and cases where real life software projects do not neatly lend themselves to this new policy can all be expected 
to arise. Flexibility in a roll-out period and an (at least somewhat) evolving policy are going to be necessary.
