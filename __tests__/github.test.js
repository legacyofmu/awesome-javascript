import GitHub from '../lib/github';

describe('Integration with GitHub API', () => {
    let github

    beforeAll(() => {
        github = new GitHub({
            accessToken: process.env.ACCESS_TOKEN,
            baseURL: 'https://api.github.com',
        })
    })

    test('Get a user', async () => {
        const res = await github.getUser('legacyofmu')
        expect(res).toEqual(
            expect.objectContaining({
                login: 'legacyofmu',
            })
        )
    })
})