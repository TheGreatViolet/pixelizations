import axios from 'axios';

export async function getUUID(name: string): Promise<string> {
  const response = await axios.get(`https://api.mojang.com/user/profile/agent/minecraft/${name}`);
  console.log(response.data.id);

  switch (response.status) {
    case 200:
      return response.data.id;
    case 204: case 400: // 204: Not found, 400: Bad request
      return 'not-found';
    default:
      return 'unexpected-err';
  }
}

const key = '8ca7f765-45c6-42c9-975e-7ee3d6147b85';

export async function checkKey(): Promise<string> {
  const res = await axios.get(`https://api.hypixel.net/key?key=${key}`);

  switch (res.status) {
    case 200:
      return 'good';
    case 403:
      return 'invalid';
    case 429:
      return 'rate-limited';
    default:
      return 'unexpected-err';
  }
}

export async function getHStats(uuid: string) {

}