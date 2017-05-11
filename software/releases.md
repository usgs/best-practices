Releases
========


Preliminary Software Initial Migration
--------------------------------------

If source code already exists for the software, then that source code (and
any potential source code history if it is desired to be maintained) must first
undergo at least an [administrative review][???] for
[new preliminary software][???]. If the project is to be developed as
[preliminary software][???] from the beginning this step is not applicable.

 - Obtain approval from science center director (or delegated authority) to
   make the software publicly accessible
   - This may be done informally through email or personal conversation
 - Request a new project be created in the USGS organization on GitHub
   - You can create an issue in the [software development reviews][???]
     project to make this request
   - If you previously had requested a [review][???] in this way, the request
     for the repository creation can be added to this same issue, otherwise
     create a new issue
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

Each commit made to the USGS organization repositroy should have received
at least [adminstrative security review][???] for
[existing preliminary software][???] prior to begining this process. If this
is not the case, you must request this be completed and document the review
and reconcilation process (possibly using issues on the project).

 - Create a release tag in the repository
 - Follow the steps for [creating releases][???] on GitHub
   - You **must** mark the release as `pre-release`


Approved Software Release
-------------------------

All approved software releases should be made from existing
[preliminary software][???] repositories.

 - Follow the steps for completing a [review for approved software][???]
   - This should include at least one [administrative security review][???],
     one [code review][???], and two [subject matter expert review][???] (the
     subject matter expert reviews only apply to [scientific software][???]
     types)
   - Note: A single person may complete more than one type of review,
     completing the recommended review types may involve as few as two
     reviewers
 - Obtain science center director (or delegated authority) to publish an
   approved software package
 - Merge the release candidate reconciliation branch back into the master
   branch
 - Update the release candidate reconciliation branch DISCLAIMER.md file...
   - Remove the [preliminary software disclaimer][???] text
   - Add the [approved software disclaimer][???] text
 - Create a release tag using the reconciled release candidate branch as a
   basis and follow the steps for [creating releases][???] on GitHub
   - You do **not** need to mark the release as `pre-release`
