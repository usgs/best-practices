# U.S. Geological Survey Best Practices

This repository represents an effort to strengthen the software community within
the U.S. Geological Survey and follow the open source efforts promoted by the
executive level of the federal government. The intent is this become a community
built project. All users are encouraged to contribute and comment on issues and
pull requests.

## Guiding Principles
- Produce/Accomplish 
- Communicate 
- Develop buy-in
- Integrate
- Iterate
- Innovate
- Be open
- Practice (as in practice what we preach, become practitioners!)

## Developement
### Code Reviews
Considerations when conducting code reviews:

* Application Security – This reminds developers to handle buffer overruns, mask or remove any internal resource references, and verifying server-side validity checks to coincide with client-side ones.  Often overlooked security items such as session information, transaction controls, developer back-doors, and hard-coded passwords are questioned.
* Error Handling – This area is looked at to help ensure safe and user-friendly end-user experiences by questioning function caller notifications, assertions, and exception handling. It’s also important not to give too much information in errors, so that is examined as well.
Performance – Since this is always a concern, our checklist identifies some key areas that need to be reviewed, such as recursive functions, duplicated objects, system call blocks, and busy waits.
* Resource Leaks – Resource leaks can cause and contribute to performance issues, so the checklist includes questions regarding the freeing of allocated memory and objects, and tracking reference counts.
Thread Safeness – This section helps identify the safety of global variables and any deadlock risks.
* Functions – These certainly aren’t left out, and are reviewed to check parameter verification, out-of-bound indexes, and the initialization of variables.
* Comments - Well commented code will be easier to operate and maintain in the long run
* Coding Conventions - Adherence to coding standards/style/conventions (add link or references) helps to ensure consistency and readability and thus improve maintainability

## Software Release
A new software release policy is about to come out from the USGS. This section has some resources for USGS employees and collaborators looking to understand how we do things in terms of review and release.

* [DOIs for software](doi.md)

## Using [Issues](issues/)
We're starting to use this repo to discuss issues related to best practices and things to do with Software Release in the USGS. We are moving FAQs that were formerly under a different tool into issues, so you will see some things in there attributed to who posted them originally. We'll try to get some labels going to help distinguish different kinds of issues.

Anyone can post to issues, which is what we want. This is generally an open dialog about how we are doing things. Be aware that we are talking about USGS matters in an open and public forum, and there will be some insider baseball (e.g., "IPDS" and "BAO"). We do welcome other viewpoints and input, but you'll see a lot of stuff that might require a little inside knowledge.

## DevOps



## IT
