import dotenv from 'dotenv-safe';
import app from '@src/app';
import log from '@src/utils/logger';
import db from '@src/models';

dotenv.config();
const port = process.env.PORT || 3000;

db.sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      log.info(`Listening On PORT ${port}`);
    });
  })
  .catch((err: any) => log.error(err));
