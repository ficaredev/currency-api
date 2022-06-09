import { test } from '@japa/runner'
import { WelcomeService } from '#app/Services/WelcomeService'

test.group('WelcomeServiceTest', () => {
  test('should return concrete welcome payload from service', async ({ assert }) => {
    const welcomeService = new WelcomeService()

    const { name, domain, version, description, source } = await welcomeService.findOne()

    assert.equal(name, 'currency')
    assert.equal(version, '1.0.0')
    assert.equal(domain, 'http://localhost:1335')
    assert.equal(source, 'https://github.com/microservicescommunication/currency-api')
    assert.equal(description, 'Currency API')
  })
})
