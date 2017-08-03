Metadata
========


Providing properly structured metadata is key to ensuring software be
adequately discoverable and reusable. In keeping with the
[Federal Source Code Policy][1] it is recommended to create a ```code.json```
file in the root of each software repository. The contents of the
```code.json``` file should be that of a single ```project``` as described on
the [inventory code compliance website][2]. An [example code.json file][3]
for this best practices repository is available for reference.

By creating this file, a bureau file will be automatically generated and
posted to either the DOI or USGS website in order to maintain
the USGS software inventory as part of the federal software inventory at
[https://code.gov/#/explore-code/agencies/][4].


Requirements
------------

This file is required for all approved software releases. Attribute keys and
string values should all be enclosed in double quotes. Integer values should
not be quoted.


Recommendations
---------------

This file is recommended for all scratch and preliminary software releases.

It is recommended the ```tags``` array be populated with meaningful tags. One
specific recommended tag is the USGS mission area and/or science center. For
increased value, it is important to develop a consistent tagging ontology
within your office, across the USGS, and beyond.

Where applicable it is recommended this file include the ```partners```
attribute as well. This is important to give credit where credit is due.



[1]: https://code.gov/#/policy-guide/policy
[2]: https://code.gov/#/policy-guide/docs/compliance/inventory-code
[3]: ../code.json
[4]: https://code.gov/#/explore-code/agencies/