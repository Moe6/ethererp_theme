app_name = "ethererp_theme"
app_title = "EtherErp Theme"
app_publisher = "Ethercircuit Solutions"
app_description = "Brand + UI for EtherErp (Circuit Auto) web presence"
app_icon = "octicon octicon-paintcan"
app_color = "#0070B8"
app_email = "info@ethercircuit.co.za"
app_license = "MIT"

# Website assets
web_include_css = ["/assets/ethererp_theme/css/ethererp.bundle.css"]
web_include_js  = ["/assets/ethererp_theme/js/ethererp.bundle.js"]

# Desk (Frappe App) assets
app_include_css = ["/assets/ethererp_theme/css/desk.css"]
app_include_js  = ["/assets/ethererp_theme/js/desk.js"]

# Jinja context helpers
jinja = { "methods": ["ethererp_theme.utils.website_context"] }

# Template overrides
override_website_template = {
    # Webshop pages
    "templates/generators/item_group/item_group.html": "ethererp_theme/overrides/item_group.html",
    "templates/generators/item/item.html": "ethererp_theme/overrides/item.html",
    # Global navbar/footer includes (website)
    "templates/includes/navbar.html": "ethererp_theme/templates/includes/ethererp_navbar.html",
    "templates/includes/footer.html": "ethererp_theme/templates/includes/ethererp_footer.html",
    # Polished login page
    "templates/pages/login.html": "ethererp_theme/templates/pages/login.html",
}
