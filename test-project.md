## Test automation project checklist

### Configuration

- [ ] Test environment configuration
- [ ] Test data
- [ ] Test configuration: browsers, retries, timeouts, parallelization etc.
- [ ] Test reporters
- [ ] HTML report with trace, screenshots and videos

### UI tests

- [ ] Pages fixtures (Page Object Model)
- [ ] Handling authorization
- [ ] Smoke tests

### API tests

- [ ] API fixtures
- [ ] Handling authorization
- [ ] Request retry mechanism
- [ ] Smoke tests

### CI

- [ ] Running tests on CI - scheduled or triggered run
- [ ] Running tests on CI - on demand
- [ ] Storing artifacts: HTML report, screenshots, videos
- [ ] HTML Report can be viewed on CI
- [ ] Slack notifications on test failure
- [ ] Cache Playwright dependencies and browser binaries

### Static analysis

- [ ] Prettier
- [ ] ESlint
- [ ] Husky
- [ ] Running static analysis check on PR
