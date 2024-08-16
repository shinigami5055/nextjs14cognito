import { ResourcesConfig } from "aws-amplify";

const amplifyConfig: ResourcesConfig = {
    Auth: {
      Cognito: {
        userPoolClientId: '6ta0o5s5otcvv85rucprbpqfpc',
        userPoolId: 'ap-southeast-2_KRgiNcOYd',
        }
      }
    }

export default amplifyConfig;
