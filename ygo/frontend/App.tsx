import { FlashList } from "@shopify/flash-list";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";

const API_URL = "http://192.168.1.106:3000";

type Produto = {
  _id?: string;
  nome: string;
  preco: number;
};

export default function App() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [nomeProduto, setNomeProduto] = useState("");
  const [precoProduto, setPrecoProduto] = useState("");
  const [editandoId, setEditandoId] = useState<string | null>(null);

  useEffect(() => {
    getProdutos();
  }, []);

  const getProdutos = async () => {
    try {
      const resposta = await axios.get(`${API_URL}/produtos`);

      console.log(resposta.data);

      setProdutos(resposta.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addProduto = async () => {
    try {
      const novoProduto = {
        nome: nomeProduto,
        preco: Number(precoProduto),
      };
      await axios.post(API_URL + "/produtos", novoProduto);
      await getProdutos();
      setNomeProduto("");
      setPrecoProduto("");
    } catch (erro) {
      console.log(erro);
    }
  };

  const updateProduto = async () => {
    try {
      await axios.patch(`${API_URL}/produtos/${editandoId}`, {
        nome: nomeProduto,
        preco: Number(precoProduto),
      });
      await getProdutos();
      setNomeProduto("");
      setPrecoProduto("");
      setEditandoId(null);
    } catch (erro) {
      console.log(erro);
    }
  };

  const deleteProduto = async (id?: string) => {
  console.log("ID enviado:", id); 

  if (!id) return;

  try {
    const res = await axios.delete(`${API_URL}/produtos/${id}`);
    console.log("Resposta delete:", res.data); 
    await getProdutos();
  } catch (erro) {
    console.log("Erro delete:", erro); 
  }
};

  const iniciarEdicao = (produto: Produto) => {
    setNomeProduto(produto.nome);
    setPrecoProduto(String(produto.preco));
    setEditandoId(produto._id || null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <TextInput
          style={styles.input}
          value={nomeProduto}
          placeholder="Digite nome"
          placeholderTextColor="#aaa"
          onChangeText={setNomeProduto}
        />
        <TextInput
          style={styles.input}
          value={precoProduto}
          placeholder="Digite preço"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          onChangeText={setPrecoProduto}
        />
        <TouchableOpacity
          style={styles.botao}
          onPress={editandoId ? updateProduto : addProduto}
        >
          <Text style={{ color: "white" }}>
            {editandoId ? "Salvar" : "Adicionar"}
          </Text>
        </TouchableOpacity>
      </View>

      {produtos.length > 0 && (
        <FlashList
          data={produtos}
          keyExtractor={(item) => item._id!}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.textProduto}>
                {item.nome} - R${item.preco}
              </Text>
              <View style={styles.linha}>
                <TouchableOpacity
                  style={styles.btnEditar}
                  onPress={() => iniciarEdicao(item)}
                >
                  <MaterialIcons name="edit-square" size={22} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnRemover}
                  onPress={() => deleteProduto(item._id)}
                >
                  <MaterialIcons name="highlight-remove" size={22} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}

      {produtos.length === 0 && (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Sem produtos cadastrados!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: "#121212",
  },
  botao: {
    backgroundColor: "#4CAF50",
    width: 120,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  item: {
    backgroundColor: "#1E1E1E",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  linha: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 8,
    width: "30%",
    padding: 8,
    backgroundColor: "#1E1E1E",
    color: "white",
  },
  btnEditar: {
    backgroundColor: "#FFC107",
    width: 40,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  btnRemover: {
    backgroundColor: "#F44336",
    width: 40,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginLeft: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: "white",
    fontSize: 18,
  },
  textProduto: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
