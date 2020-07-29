import { Schema } from 'mongoose';
import { eventModelName } from '~/event/models/event.model-name';
import { userModelName } from '~/user/user.model-name';

export const commentSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: userModelName,
      required: true,
    },
    destinataire: {
      type: Schema.Types.ObjectId,
      ref: userModelName,
      required: true,
    },
    event: {
      type: Schema.Types.ObjectId,
      ref: eventModelName,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
