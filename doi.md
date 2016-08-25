# Digital Object Identifiers for Software
The software release policy requires official USGS software releases to obtain a DOI when the software is officially released. This will create a DOI with a resource-type of "software" in the 10.5066 ID space that we use for all USGS data, software, and other products outside the USGS Series Reports (that get DOIs from CrossRef).

You can create a DOI in a couple of different ways:

* Use the [USGS DOI Tool](https://www1.usgs.gov/csas/doi/) to mint a DOI with a form
* Use [ScienceBase](https://www.sciencebase.gov/) to serve as a landing page for your software release and generate a DOI there

## Notes about using ScienceBase

Currently, only data admins have the ability to trigger the feature in ScienceBase that will use the citation metadata from the ScienceBase Item and mint/manage a DOI registration via an API connection to the EZID service we use. You might petition the [ScienceBase team](mailto:sciencebase@usgs.gov) to open this up to let the owners of ScienceBase Items perform this function themselves.

ScienceBase can also help with one of the other things we are supposed to do under the software release policy. If you use GitHub or some other third party platform for distributing your code, you are supposed to provide an alternative on a .gov server somewhere. You could use ScienceBase to help direct this process if you use it for your landing page from the DOI dereferencing point, with ScienceBase doing any or all of the following:

* Link to the public repo, distribution point, or project space for your code on a third party platform (e.g., GitHub, CRAN, SourceForge, etc.)
* Store a snapshot download of your code, providing the official government-based server option
* Point to a government-based repo as an alternative access for your code (e.g., [myUSGS Bitbucket](https://my.usgs.gov/bitbucket/))
* Provide additional documentation about your code beyond citation metadata, including the ability to generate an ISO19115 metadata record that might be useful in aggregating together a catalog/inventory of code