# Deployment Plan

## Rollout Steps
1. Hardware install and display mounting
2. Network configuration with VLAN segmentation and PoE provisioning
3. Raspberry Pi / NUC imaging with kiosk startup scripts
4. Backend hosting setup (cloud or on-prem) and environment configuration
5. Screen client auto-launch in fullscreen kiosk mode

## Validation
- Run demo emitters to verify event bus, rules engine, and orchestrator routing
- Confirm each `screenId` maps to the intended zone and channel
