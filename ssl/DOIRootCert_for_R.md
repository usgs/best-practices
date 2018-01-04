# Instructions for enabling the DOI Root Certificate for R

1. Download the DOI Root Certificate by following step 0 in [this document](WorkingWithinSSLIntercept.md#0-get-the-ssl-intercept-root-certificate).
1. Using Notepad (or your favorite text editor), open the file that gets downloaded (note: double-clicking the file will not work).
1. Open R(RStudio)
1. Run this in the Console: httr:::find_cert_bundle()
1. In Notepad (or your favorite text editor...), open the file that is returned from the find_cert_bundle() function
1. Copy all of the contents from "DOIRootCA.crt" (Ctrl+A, Ctrl+C)
1. Paste that at the bottom of the other open file (from the find_cert_bundle() function)
1. Save
1. Restart RStudio
