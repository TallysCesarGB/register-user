import { useState, FormEvent } from 'react'
import { Button, Input, Label } from "@/components/ui";


interface Usuario {
  nome: string
  email: string
  senha: string
}

export default function CadastroUsuario() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState<string | null>(null)
  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErro(null)

    if (!nome || !email || !senha) {
      setErro('Por favor, preencha todos os campos.')
      return
    }

    if (senha.length < 6) {
      setErro('A senha deve ter pelo menos 6 caracteres.')
      return
    }

    // Adiciona o novo usuário no array
    const novoUsuario = { nome, email, senha }
    setUsuarios((prevUsuarios) => [...prevUsuarios, novoUsuario])

    console.log('Usuário cadastrado:', novoUsuario)
    console.log('Todos os usuários:', usuarios)

    // Limpa os campos
    setNome('')
    setEmail('')
    setSenha('')

    // Simulando uma resposta de sucesso
    alert('Usuário cadastrado com sucesso!')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Cadastro de Usuário
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <Label htmlFor="nome">Nome</Label>
              <Input
                id="nome"
                name="nome"
                type="text"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <Label htmlFor="senha">Senha</Label>
              <Input
                id="senha"
                name="senha"
                type="password"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Sua senha"
              />
            </div>
          </div>

          {erro && (
            <p className="text-center text-sm text-red-600">{erro}</p>
          )}

          <Button type="submit" className="w-full">
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
  )
}
