---
sidebar_position: 3
---

# Subdomain

## Subdomain Configuration 

Subdomains work just like basic configurations, except that here we have to specify the subdomains we want to configure. Here's an example:

```dnrs
subdomain = {
    mail: {
        type: MX
        ttl: 3600
        priority: 10
    }
    dnrs: {
        type: A
        ttl: 3600
    }
}
```

Here we are configuring the mail and dnrs subdomains with the different type we wish to configure