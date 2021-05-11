---
layout: page
title: "Instructor Notes"
---

## A Note on Audience

The target audience is the [MS in Information Management](https://ischool.illinois.edu/degrees-programs/ms-information-management) student population.



## RStudio and Multiple R Installs

Some learners may have previous R installations. On Mac, if a new install is
performed, the learner's system will create a symbolic link, pointing to the new
install as 'Current.' Sometimes this process does not occur, and, even though a
new R is installed and can be accessed via the R console, RStudio does not find
it. The net result of this is that the learner's RStudio will be running an
older R install. This will cause package installations to fail. This can be
fixed at the terminal. First, check for the appropriate R installation in the
library;

```
ls -l /Library/Frameworks/R.framework/Versions/
```

We are currently using R 4.x.y If it isn't there, they will need to install it.
If it is present, you will need to set the symbolic link to Current to point to
the 4.x.y directory:

```
ln -s /Library/Frameworks/R.framework/Versions/4.x.y /Library/Frameworks/R.framework/Version/Current
```

Then restart RStudio.


## Technical Tips and Tricks

- Show students how to use the `Zoom` button to examine graphs without constantly resizing windows.

- Sometimes a package will not install.  In that case, you should try a different CRAN mirror:  `Tools > Global Options > Packages > CRAN Mirror`

    Alternatively you can go to CRAN and download the package and install from ZIP file: `Tools > Install Packages`, set to `'from Zip/TAR'`

    It is important that R and the R packages be installed locally, not on a network drive. If a learner is using a machine with multiple users where their account is not based locally this can create a variety of issues (This often happens on university computers). Hopefully the learner will realize these issues before hand, but depending on the machine and how the IT folks that service the computer have things set up, it may be very difficult to impossible to make R work without their help.

    If learners are having issues with one package, they may have issues with another. It's often easier to make sure they have all the needed packages installed at one time, rather then deal with these issues over and over. [Here is a list of all necessary packages for these lessons.](TBD)


## Tips for In Class instruction

TBD
 * mention auto-pushes
 * jamboards
 * else?

