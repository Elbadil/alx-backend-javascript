import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((resolvedValue) => {
      const [Value1, Value2] = resolvedValue;
      console.log(`${Value1.body} ${Value2.firstName} ${Value2.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
