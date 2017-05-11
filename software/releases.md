Releases
========


Preliminary Software Initial Migration
--------------------------------------

If source code already exists for the software, then that source code (and
any potential source code history if it is desired to be maintained) must first
undergo at least an [administrative security review][1] for
_new preliminary software_. If the project is to be developed as
[preliminary software][2] from the beginning this step is not applicable.

 - Obtain approval from science center director (or delegated authority) to
   make the software publicly accessible
   - This may be done informally through email or personal conversation
 - Request a new project be created in the USGS organization on GitHub
   - You can create an issue in the [software development reviews][3]
     project to make this request
   - If you previously requested a review in this way, the repository creation
     request can be added to this same issue, otherwise create a new issue
   - Add the `repository-request` label to the issue
   - Include the following information in the request
     - **Repository Name**: Repositories should be all lower case and should be
       prefixed with a topic or science center prefix, for example:
       `earthquake-hazard-tool` or `vsc-valve`
     - **Repository Administrator**: The GitHub account (must be a member of
       the USGS organization) who will administer the repository
     - **Approving Official**: The name of the science center directory (or
       delegated authority) who approved public availability of the software
  - A USGS organization administrator will create the requested repository,
    potentially asking clarifying questions using the issue used to make the
    request
  - The _repository administrator_ may now import the software into the new
    repository


Preliminary Software Subsequent Release
---------------------------------------

Each commit made to the USGS organization repository should have received
at least [adminstrative security review][1] for existing preliminary software
prior to begining this process. If this is not the case, you must request
this be completed and document the review and reconcilation process (possibly
using issues on the project).

 - Create a release tag in the repository
 - Follow the steps for [creating releases][4] on GitHub
   - You **must** mark the release as `pre-release`


Approved Software Release
-------------------------

All approved software releases should be made from existing
[preliminary software][2] repositories.

 - Follow the steps for completing a _review for approved software_
   - This should include at least one [administrative security review][1],
     one [code review][5], and two [subject matter expert reviews][6] (the
     subject matter expert reviews only apply to [scientific software][7]
     types)
   - Note: A single person may complete more than one type of review,
     completing the recommended review types may involve as few as two
     reviewers
 - Obtain approval from science center director (or delegated authority) to
   publish an approved software package
 - Merge the release candidate reconciliation branch back into the master
   branch
 - Update the release candidate reconciliation branch DISCLAIMER.md file...
   - Remove the [preliminary software disclaimer][8] text
   - Add the [approved software disclaimer][9] text
 - Create a release tag using the reconciled release candidate branch as a
   basis and follow the steps for [creating releases][4] on GitHub
   - You do **not** need to mark the release as `pre-release`



[1]: ./reviews.md#administrative-security-review
[2]: ./stages.md#preliminary-software
[3]: https://code.usgs.gov/software-release/reviews/issues/new
[4]: https://help.github.com/articles/creating-releases/
[5]: ./reviews.md#code-review
[6]: ./reviews.md#subject-matter-expert-review
[7]: ./types.md#scientific-software
[8]: https://www2.usgs.gov/fsp/fsp_disclaimers.asp#11
[9]: https://www2.usgs.gov/fsp/fsp_disclaimers.asp#5
