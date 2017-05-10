Review
======

There are several different types of reviews required for software projects
within the USGS depending on the [project type][1] and [project state][2].
While a review process is enforced for all projects that are a part of the
[USGS organizationon on GitHub][3], it is still reasonable guidance to
self-impose some sort of review process on personal repositories as well.


Administrative
--------------

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


Technical
---------

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


Scientific
----------

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



[1]: ./project_type.md
[2]: ./project_state.md
[3]: https://github.com/usgs/
[4]: ./project_state.md#preliminary-software
[5]: ./project_state.md#approved-software
[6]: ./project_type.md#scientific-software
