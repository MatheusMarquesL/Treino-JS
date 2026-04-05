import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Produto, ProdutoDocument } from './schemas/produto.schema';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectModel(Produto.name)
    private produtoModel: Model<ProdutoDocument>,
  ) {}

  async create(createProdutoDto: CreateProdutoDto) {
    return this.produtoModel.create(createProdutoDto);
  }

  async findAll() {
    return this.produtoModel.find();
  }

  async findOne(id: string) {
    const produto = await this.produtoModel.findById(id);
    return produto ?? '[AVISO]: Produto não encontrado!';
  }

  async findOneByName(nome: string) {
    return this.produtoModel.findOne({ nome });
  }

  async update(id: string, updateProdutoDto: UpdateProdutoDto) {
    const produto = await this.produtoModel.findByIdAndUpdate(
      id,
      updateProdutoDto,
      { new: true },
    );

    return produto ?? '[ERRO] Produto não encontrado!';
  }

  async remove(id: string) {
    try {
      const produto = await this.produtoModel.findByIdAndDelete(id);

      return produto
        ? '[AVISO]: Produto Removido!'
        : '[ERRO]: Produto não encontrado!';
    } catch (erro) {
      console.log(erro);
      return '[ERRO]: Falha ao remover';
    }
  }
}
