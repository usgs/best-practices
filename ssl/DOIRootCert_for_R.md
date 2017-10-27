# Instructions for enabling the DOI Root Certificate for R/RStudio

1. Click this link to download a file called "DOIRootCA.crt": http://sslhelp.doi.net/docs/DOIRootCA2.cer
1. Using Notepad (or your favorite text editor), open the file that gets downloaded (note: double-clicking the file will not work).
1. Open R(RStudio)
1. Run this in the Console: httr:::find_cert_bundle()
1. In Notepad (or your favorite text editor...), open the file that is returned from the find_cert_bundle() function
1. Copy all of the contents from "DOIRootCA.crt" (Ctrl+A, Ctrl+C)
1. Paste that at the bottom of the other open file (from the find_cert_bundle() function)
1. Save
1. Restart RStudio
