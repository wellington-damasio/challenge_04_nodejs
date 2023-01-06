import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] | false {
    const userId = user_id.toString();
    const isAdmin = this.usersRepository.findById(userId).admin === true;

    if (!isAdmin) {
      throw new Error("User is not an admin");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
