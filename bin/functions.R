# this is for showing help -- https://stackoverflow.com/questions/26480559/r-markdown-file-include-help-information
static_help <- function(pkg, topic, out, links = tools::findHTMLlinks()) {
   pkgRdDB = tools:::fetchRdDB(file.path(find.package(pkg), 'help', pkg))
   force(links)
   tools::Rd2HTML(pkgRdDB[[topic]], out, package = pkg, Links = links, no_links = is.null(links))
 }