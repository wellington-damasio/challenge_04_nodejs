import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const foundUser = this.showUserProfileUseCase.execute({ user_id });
      return response.json(foundUser);
    } catch (error) {
      return response.status(404).json({ error: "User not found" });
    }
  }
}

export { ShowUserProfileController };
