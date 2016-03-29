#  Guidelines for Code Documentation

The Albuquerque Seismological Laboratory (ASL) has a diverse number of different types of code written in various languages by different people and during different time periods (from scientists, to professional programmers, to people who think they are professional programmers).  This makes it necessary for everyone writing code to follow a number of standards so that the code can be modified/fixed in the future.  The aim of this is to improve the readability of the code and make it more maintainable.  

Below are some “best practices” and other methods for documenting and version controlling ASL code.  Since every rule is meant to be broken these should be viewed as general guidelines and not hard and fast rules.  However, we should also strive to make our documentation better when we are breaking these rules.  The ultimate goal is to make our code more easily maintained.  

### Revision and Version Control  

All code should be version controlled.  We want to avoid having large numbers of multiple versions of things.  If someone requires a “special” version we should attempt to make this an option in the code that everyone can use.  With some of the grandfather code we will have to do this as time allows (we should strive to minimize the DCC and non-DCC versions of things).

The current approach for our code is to have each piece of code in a git repository.  If the code is “general” ASL code this should be added to the asl-usgs group.  This addition should be done once the code is in a workable state.  When making changes to code try to follow the master and devel branch model.  That is, the current stable version should be under master and code should be modified initially under devel.  Initial projects should be developed on users own accounts and later included into the asl-usgs group.  When code is going to be formally published we should follow the general USGS procedure for making the code public.

### Coding Practices

The following are a few guidelines for allowing code to be easily managed by everyone.  Again, these aren’t hard and fast rules, but they should help to avoid messes of code without documentation.

*Every program should of have a readme file:*  This should include what the program does, basics on how it is used, and various known issues and bugs.  

*Try to limit lines to 80 characters:* This makes it easier to compare diffs on code.

*Document functions and classes in the code:* General descriptions of what the function does, input and output, and any “tricky stuff” should be documented in the code itself.

*Include header documentation in each file:* Each distinct file should include a header file explaining what is in the file, who wrote it, and any other general information necessary for fixing bugs.  If possible you should also include license information (GPL, GNU, etc.).  This can make it easier for people to later verify the license type.

*Use case sensitive variables and avoid _:* In order to make our variables verbose lets avoid “_” and use full words.  For example:

Good: 

    milliVanilli, newKidsOnTheBlock, whoLeftTheFridgeOpen

All of the variables are verbose and have the first letters or the second and later words with capitals.  

Bad: 

    mIlLiVaNiLlI,new_kids_on_the_block, wltfo

These are harder to read, contain “_”, or are too brief.

*Avoid wrappers:* Try to avoid using wrappers to make one piece of code look like it is in a different programming language.  We have had trouble in the past with changing between various programming languages for little more than cosmetic reasons.  Lets avoid this.    

*Avoid code requiring expensive licenses and compilers:* If possible try to code in languages that avoid the need for each user to have a copy of an external program that becomes costly (e.g. matlab, maple, etc.).  It is also advantageous if code is packaged in a way to avoid using internal directory structures that are only at ASL.  If possible make the code run on files and use scripts to deal with the directory structure for the files.  

*Avoid writing in arcane languages:* As permits avoid using outdated languages that are compiler or (gasp) computer specific.  This mostly pertains to FORTRAN code and old DCC code.  When possible try to port the code into a more modern language and avoid using excessive in-house libraries when possible (e.g. try to remove dependencies on gfs file systems or programs that compile on only Sun systems).
 
*Write comments and documentation while coding:* Do not comment and document code after you have written the code.  Write the documentation WHILE you are coding.

*Avoid hardcoding variables:* When possible avoid using hard-coded variables such as a specific network (e.g. don’t limit code to IU, US, etc.) instead allow for flexibility in the code to deal with all cases.

*Follow SEED conventions:* When possible follow SEED naming conventions, use mSEED data, and SEED dataless.  Try to minimize the use of SAC and external data formats.

*Use tabs and spaces:* Try to avoid writing overly dense code that doesn’t use proper indentation.  Avoid mixes tabs and spaces (e.g. follow pep8 when writing python code).

*Split commands by line:* Try to avoid doing multiple commands in a line.  For example, break up a for loop to have the contents of the loop on a line below that is indented.  

For example:
    
Good:
    
    if studentGrade == “A”:
			print “You get an ice cream.”
		else:
			print “You do not get an ice cream.”

Bad: 

    if not studentGrade == “A”: print “You do not get an ice cream.”; else: print “You get an ice cream.”;

*Include error handling:* Try to include error handling to avoid people using code that would mask problems.  For example, make sure variables format correctly and throw exceptions when things go wrong.  

*Avoid making special versions of code:* If someone wants a special version of a piece of code try to make it a feature in the current code.  Try to avoid making spin-off versions that cause later issues.

*Minimize Warnings:* Warnings should be treated as errors. Code committed should not contain any errors.  When possible, avoid producing code that produces different warnings on specific compilers.  This can be hard to keep track of and sometimes is inconsistent do your best to make your code workable.

### Releases

In order to avoid a lot of head scratching aim to release your code with a versioning scheme.  The use of three numbers separated by decimals makes logical sense.  The first number indicates the major version, the second number indicates the minor version, and the third number indicates minor bug fixes.

For example:

1.1.1 would be the first major version, with the first minor version, and one bug fix.

You should aim to make your code have some indication of the version number so that people can verify which version they are running.  Remember to have you releases code reviewed as well as user reviewed to avoid introducing new bugs.  When code with minor or major revisions are released include release notes about the changes.  

### Unit Testing

All production code should have a suite of unit tests.   Our goal isn't to hit a specific percent coverage or number of tests, but instead to make sure we have tests that cover the boundary cases as well as typical use cases.  A few things should be kept in mind: 

*Do not write tests that code around known issues:* Instead write the test that will knowlingly fail and deal with it at a later date.

*Do not write unreadable/complicated tests:* Our tests should in someway be examples for typical use cases that could help someone understand how a piece of code works.

*Write tests that test the code:* Simple assert tests should be sufficient we don't need to write large number of integration style tests.

*Use common test suites:* Avoid using non-standard test suites.

