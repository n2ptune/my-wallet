import { User } from '@/entity/log'
import connection from '@/entity/orm_connect'

export const saveUserCurrency: (currency: User[]) => void = async (
  currency
) => {
  connection.then((conn) => {
    currency.forEach(async (cur) => {
      const findCurrency = await conn
        .getRepository(User)
        .createQueryBuilder('user')
        .where('user.currency = :currency', { currency: cur.currency })
        .getOne()

      if (findCurrency) {
        const { id, ...excludeId } = cur
        await conn
          .createQueryBuilder()
          .update(User)
          .set(excludeId)
          .where('id = :id', { id })
          .execute()
      } else {
        await conn
          .createQueryBuilder()
          .insert()
          .into(User)
          .values(cur)
          .execute()
      }
    })
  })
}
