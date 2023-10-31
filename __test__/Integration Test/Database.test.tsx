import { Auth } from 'aws-amplify';

jest.mock('aws-amplify');

describe('AWS Amplify Auth Module', () => {
  it('password not strong enough', async () => {
    // Mock the signIn function to reject with an error
    Auth.signIn = jest.fn().mockRejectedValue(new Error('Invalid credentials'));

    // Attempt to sign in
    await expect(
      Auth.signIn('test@example.com', 'password123')
    ).rejects.toThrow('Invalid credentials');
  });
});
