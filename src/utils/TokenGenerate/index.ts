import * as fs from 'fs/promises';
import * as jwt from 'jsonwebtoken';

class TokenGenerate {
  private jwtConfig: jwt.SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  }

  public async generate(payload: object) {
    const token = jwt.sign(payload, await fs.readFile('jwt.secret.key', 'utf-8'), this.jwtConfig)
    return token;
  }

  public async decode(token: string) {
    return jwt.verify(token, await fs.readFile('jwt.secret.key', 'utf-8'));
  }
}

export default TokenGenerate;
