import { Injectable } from '@nestjs/common';
import { AbstractService } from '~/commons/services/abstract.service';
import { CommentEntity } from '~/comment/dto/comment.entity';
import { Model } from 'mongoose';
import { commentModelName } from '~/comment/models/comment.model-name';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CommentService extends AbstractService<CommentEntity> {
  constructor(
    @InjectModel(commentModelName) private readonly commentModel: Model<CommentEntity>,
  ) {
    super(commentModel);
  }
}

