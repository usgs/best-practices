# General Guidelines
###### [Jeremiah Lant](https://github.com/jlant-usgs), Hydrologist, USGS
As a self-taught programmer, the following are the general guidelines for best practices in scientific computing that I
have found really helpful and do my best to follow.

## Best Practices for Scientific Computing
[Wilson G, Aruliah DA, Brown CT, Chue Hong NP, Davis M, Guy RT, et al. (2014) Best Practices for Scientific Computing. PLoS Biol 12(1): e1001745. doi:10.1371/journal.pbio.1001745](http://dx.doi.org/10.1371/journal.pbio.1001745)

> We describe a set of best practices for scientific software development, based on research and experience, that will
> improve scientists' productivity and the reliability of their software.

```
1. Write programs for people, not computers.
    a. A program should not require its readers to hold more than a handful of facts in memory at once.
    b. Make names consistent, distinctive, and meaningful.
    c. Make code style and formatting consistent.
2. Let the computer do the work.
    a. Make the computer repeat tasks.
    b. Save recent commands in a file for re-use.
    c. Use a build tool to automate workflows.
3. Make incremental changes.
    a. Work in small steps with frequent feedback and course correction.
    b. Use a version control system.
    c. Put everything that has been created manually in version control.
4. Don't repeat yourself (or others).
    a. Every piece of data must have a single authoritative representation in the system.
    b. Modularize code rather than copying and pasting.
    c. Re-use code instead of rewriting it.
5. Plan for mistakes.
    a. Add assertions to programs to check their operation.
    b. Use an off-the-shelf unit testing library.
    c. Turn bugs into test cases.
    d. Use a symbolic debugger.
6. Optimize software only after it works correctly.
    a. Use a profiler to identify bottlenecks.
    b. Write code in the highest-level language possible.
7. Document design and purpose, not mechanics.
    a. Document interfaces and reasons, not implementations.
    b. Refactor code in preference to explaining how it works.
    c. Embed the documentation for a piece of software in that software.
8. Collaborate.
    a. Use pre-merge code reviews.
    b. Use pair programming when bringing someone new up to speed and when tackling particularly tricky problems.
    c. Use an issue tracking tool.
```

## Open Science Decoded
[Hey Tony, Payne Mike C. 2015. Open science decoded. Nature Physics 11, 367–369. doi:10.1038/nphys3313](http://dx.doi.org/10.1038/nphys3313)

> Granting access to publications and data may be a step towards open science, but it's not enough to ensure
> reproducibility. Making computer code available is also necessary — but the emphasis must be on the quality of the
> programming.

## The Zen of Python
[Peters, Tim. 2004. Python Enhancement Proposals (PEP) 20 -- The Zen of Python.](http://legacy.python.org/dev/peps/pep-0020/)

```
>>> import this
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
```

## Example Code Style Guides
* [Python Enhancement Proposal (PEP) 8 -- Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/)
* [The Hitchhicker's Guide to Python](http://docs.python-guide.org/en/latest/writing/style/)
* [The Pocoo Style Guide](http://www.pocoo.org/internal/styleguide/)


## Other References
* [Gentzkow, Matthew and Jesse M. Shapiro. 2014. Code and Data
for the Social Sciences: A Practitioner’s Guide. University of Chicago mimeo](http://faculty.chicagobooth.edu/matthew.gentzkow/research/CodeAndData.pdf)


## Example Project
* [cookiecutter-python-package](https://github.com/usgs/cookiecutter-python-package) - a project on the [USGS GitHub site](https://github.com/usgs) that aims to make implementing some of the best practices in scientific computing a little bit easier.
