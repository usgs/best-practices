Review
======

All software maintained by the U.S. Geological Survey (USGS) is subject to
peer review. There are several different types of reviews required for
software within the USGS depending on the [software type][1] and
[software stage][2].

Types of Reviews
----------------
 - [Administrative Security Review](#administrative-security-review)
 - [Code Review](#code-review)
 - [Subject Matter Expert Review](#subject-matter-expert-review)

Equally important to performing the peer review is documenting the review and
reconciliation process. While similar at a high level, this process varies
slightly depending on the current project state.

**For _new_ [preliminary software...][???]**

> This review occurs prior to migrating scratch software into the USGS
> organization on GitHub.

 - Put the software in a version control repository accessible by the intended
   reviewer
 - Create an issue in the software release reviews project requesting
   a review on the software
   - Include a link to where the software is accessible
   - Add a label to the issue indiciating the type of review being requested
 - Wait for reviewer to approve the changes
   - This may involve iteratively fixing issues the reviewer points out

> Note: Once the review is complete you typically want to finish the
> [initial migration process][???] as outlined in the workflows section.

**For _existing_ [preliminary software][???]...**

> Every change to a repository in the USGS organization on GitHub must receive
> at least an administrative review. This can be done using pull requests. The
> following steps assume you are following the
> [integration manager workflow][???]

 - Submit a pull request from your user fork of the USGS repository back to
   the primary USGS repository
   - Assign a reviewer to the pull request
 - Wait for reviewer to approve the changes
   - This may involve iteratively fixing issues the reviewer points out
 - Merge (or better, have the reviewer merge) the changes into the USGS
   repository

**For [approved software] tags[???]...

 - Create a release candidate _branch_
   - Using [semantic versioning][???] this may be something like:
     `git checkout -b vMAJOR.MINOR.PATCH-rc1-Branch`
 - Create a release candidate _tag_
   - Using [semantic versioning][???] this may be something like:
     `git tag -am 'vMAJOR.MINOR.PATCH-rc1' vMAJOR.MINOR.PATCH-rc1`
 - Create an issue on the project issues page requesting the appropriate level
   of review be performed
   - Provide a link to the release candidate _tag_
 - Wait for reviewer(s) to approve the changes
   - This may involve iteratively fixing issues the reviewer points out by
     making commits back to the release candidate _branch_

> Note: Once the review is complete you typically want to finish the
> [release process][???] as outlined in the workflows section


Administrative Security Review
------------------------------

Admiministrative reviews ensure personal, private, or otherwise sensitive
information is not included in the repository. This includes:

 - Personally identifiable information (PII)
 - Absolute file system paths
 - Internal server host names or IP addresses
 - Usernames/Passwords
 - ... etc ...

These reviews can be **performed by any trusted person**; the reviewer does
not necessarily need a strong scientific or programming background. When
migrating an existing project into the USGS organization on GitHub, it is
important to remember that the entire project history needs to be reviewd if
that history is to be maintained after migration.

### Project Types

All [project types][1] require this level of review.

### Project States

Projects in the following states require this level of review

 - [Preliminary Software][4]
 - [Approved Software][5]


Code Review
-----------

Technical reviews ensure overall code quality. This can mean different
things depending on the individual project/team but some typical quality
checks include:

 - Coding standards
 - Unit tests passing
 - User input cleansing
 - Memory leaks
 - Vulnerabilities
 - Optimizations
 - ... etc ...

These reviews should be performed by a **trusted developer** with applicable
programming knowledge. This person need not have thorough subject-matter
knowledge on the project topic.

### Project Types

All [project types][1] require this level of review.

### Project States

Projects in the following states require this level of review

 - [Approved Software][5]

### Documentation


Subject Matter Expert Review
----------------------------

Scientific reviews ensure the software generates output that align with
published or otherwise well-known expected results. This may involve:

 - Comparing output with external data sets
 - Comparing algorithms with published scholarly articles about the algorithm
 - Reviewing unit and integration test results
 - ... etc ...

These reviews should be performed by a **trusted scientific expert** with
applicable subject-matter knowledge as well as sufficient applicaple
programming knowledge.

### Project Types

 - [Scientific Software][6]

### Project States

Projects in the following states require this level of review

 - [Approved Software][5]

### Documentation



[1]: ./project_type.md
[2]: ./project_state.md
[3]: https://github.com/usgs/
[4]: ./project_state.md#preliminary-software
[5]: ./project_state.md#approved-software
[6]: ./project_type.md#scientific-software
