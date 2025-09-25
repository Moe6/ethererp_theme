import frappe

def website_context(context):
    """
    Provides context variables for website templates.
    Determines branding based on the current site/domain.
    """
    
    # Get the current site or request host
    host = ""
    if hasattr(frappe.local, 'request') and frappe.local.request:
        host = frappe.local.request.host.lower()
    elif hasattr(frappe.local, 'site'):
        # Fallback to site name if no request available
        site = frappe.local.site or ""
        if "shop.circuitauto" in site:
            host = "shop.circuitauto"
        elif "circuitauto" in site:
            host = "circuitauto"
    
    # Determine if this is a shop (Circuit Auto) or ERP (EtherErp) site
    is_shop = "shop.circuitauto" in host
    
    # Set branding based on site type
    if is_shop:
        context.ethererp_brand = "Circuit Auto"
        context.ethererp_logo = "https://www.ethercircuit.co.za/assets/CA_logo.png"
    else:
        context.ethererp_brand = "EtherErp"
        context.ethererp_logo = "https://www.ethercircuit.co.za/assets/ES_logo.png"
    
    # Set region and currency based on domain
    if ".co.za" in host or "south" in host:
        context.ethererp_region = "ZA"
        context.ethererp_currency = "ZAR"
    elif ".co.zw" in host or "zimbabwe" in host:
        context.ethererp_region = "ZW"
        context.ethererp_currency = "USD"
    else:
        # Default to South Africa
        context.ethererp_region = "ZA"
        context.ethererp_currency = "ZAR"
    
    return context
