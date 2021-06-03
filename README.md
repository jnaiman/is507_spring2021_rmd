# RMD port of IS507

To make files on loop use bash command:

```bash
# auto build an Rmd page
# $1: github Rmd file; e.g. /Users/jillnaiman/is507_spring2021_rmd/
autoBuildRmd(){
    while [ true ]
    do
	cd $1; while :; do clear; make lesson-md; sleep 1; done
    done
}
```

To serve site use:

```bash
make serve exec
```

In is507_spring2021_rmd
