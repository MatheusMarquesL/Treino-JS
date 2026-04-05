import { FlashList } from '@shopify/flash-list';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from "axios";
import { MaterialIcons } from '@expo/vector-icons';

const API_URL = 'http://localhost:3000';

type Produto = {
  _id?: string,
  nome: string,
  preco: number
}

export default function App() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [nomeProduto, setNomeProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');

  useEffect(() => {
    getProdutos();
  }, []);

  const getProdutos = async () => {
    try {
      const resposta = await axios.get(`${API_URL}/produtos`);
      const listaDeProdutos: Produto[] = [];
      for(let i = 0; i < resposta.data.length; i++) {
        listaDeProdutos.push({
          _id: resposta.data[i]._id,
          nome: resposta.data[i].nome,
          preco: resposta.data[i].preco
        })
      }
      setProdutos(listaDeProdutos);
    } catch (error) {
      console.log('Erro no GET de produtos');
      console.log(error); 
    }
  }

  const addProduto = async () => {
    try{
      const novoProduto = {
        nome: nomeProduto,
        preco: precoProduto
      }
      await axios.post(API_URL + '/produtos', novoProduto);
      await getProdutos();
      setNomeProduto('');
      setPrecoProduto('')
    } catch (erro) {
      console.log('Erro no POST de produto', erro);
      //mostrar pro usuário que ocorreu um erro
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <TextInput
        style={styles.input}
        value={nomeProduto}
        placeholder="Digite nome"
        onChangeText={setNomeProduto}
        />
         <TextInput
        style={styles.input}
        value={precoProduto}
        placeholder="Digite preço"
        keyboardType="numeric"
        onChangeText={setPrecoProduto}
        />
        <TouchableOpacity style={styles.botao} onPress={addProduto}>
          <Text style={{ color: 'white' }}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      { produtos.length > 0 &&
      <FlashList
        data={produtos}
        renderItem={({ item }) => 
        <View style={styles.item}>
          <Text>
            {item.nome} - R${item.preco} 
          </Text>
          <View style={styles.linha}>
            <TouchableOpacity style={styles.btnEditar}>
              <MaterialIcons name="edit-square" size={22}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnRemover}>
              <MaterialIcons name="highlight-remove" size={22}/>
            </TouchableOpacity>
          </View>
        </View>}
      />}
      {produtos.length === 0 && <Text>Sem produtos cadastrados!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  botao: {
    backgroundColor: 'blue',
    width: 120,
    padding: 10,
    borderRadius: 5,
    alignContent: 'center'
  },
  item: {
    backgroundColor: '#8aff86',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  linha: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    width: '60%',
    padding: 5
  },
  btnEditar: {
    backgroundColor: 'orange',
    width: 40,
    padding: 10,
    borderRadius: 5,
    alignContent: 'center'
  },
  btnRemover: {
    backgroundColor: 'red',
    width: 40,
    padding: 10,
    borderRadius: 5,
    alignContent: 'center',
    marginLeft: 5
  },
});
