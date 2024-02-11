+++
title = "Notes"

description = "Notes"

# Whether to sort pages by "date", "weight", or "none". More on that below
sort_by = "date"

# Used by the parent section to order its subsections.
# Lower values have priority.
weight = 0

# Template to use to render this section page
template = "section.html"
page_template = "page.html"

# How many pages to be displayed per paginated page.
# No pagination will happen if this isn't set or if the value is 0
paginate_by = 5

# If set, will be the path used by paginated page and the page number will be appended after it.
# For example the default would be page/1
paginate_path = "page"

# Whether to insert a link for each header like the ones you can see in this site if you hover one
# The default template can be overridden by creating a `anchor-link.html` in the `templates` directory
# Options are "left", "right" and "none"
insert_anchor_links = "none"

# Whether the section pages should be in the search index. This is only used if
# `build_search_index` is set to true in the config
in_search_index = true

# Whether to render that section homepage or not.
# Useful when the section is only there to organize things but is not meant
# to be used directly
render = true

# Whether to redirect when landing on that section. Defaults to not being set.
# Useful for the same reason as `render` but when you don't want a 404 when
# landing on the root section page.
# Example: redirect_to = "documentation/content/overview"
# redirect_to = "/"

# Whether the section should pass its pages on to the parent section. Defaults to `false`.
# Useful when the section shouldn't split up the parent section, like
# sections for each year under a posts section.
transparent = false

# Use aliases if you are moving content but want to redirect previous URLs to the
# current one. This takes an array of path, not URLs.
aliases = []

# Your own data
[extra]
show_shares = false
show_copyright = true
+++
