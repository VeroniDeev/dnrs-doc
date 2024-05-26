---
sidebar_position: 1
---

# Example

## Code Example

```dnrs
domain = "zoubheir.com"
ip = "128.0.2.1"
ttl = 3600
type = A

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

> Here's how you can write the dnrs configuration