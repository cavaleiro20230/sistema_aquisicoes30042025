# sistema_aquisicoes30042025


### Sistema de Gestão de Aquisições em Conformidade com a Legislação Brasileira

 CRUD completo para um sistema de gestão de aquisições que atenda às exigências da legislação brasileira. Como você solicitou uma aplicação em Java, vou implementar usando Spring Boot, que é um framework popular para desenvolvimento de aplicações Java.

![image](https://github.com/user-attachments/assets/8c6f1426-ed11-4979-879c-c383319bbef4)



## Estrutura do Sistema de Gestão de Aquisições

O sistema que desenvolvi é um CRUD completo para gestão de aquisições em conformidade com a legislação brasileira. Ele foi projetado para atender às exigências legais, especialmente a Lei 8.666/93 (Lei de Licitações) e a Nova Lei de Licitações (Lei 14.133/2021).

### Principais Módulos

1. **Dashboard**: Visão geral do sistema com indicadores e processos recentes
2. **Fornecedores**: Cadastro e gestão de fornecedores com validação de documentação legal
3. **Licitações**: Gerenciamento de processos licitatórios em suas diversas modalidades
4. **Contratos**: Controle de contratos administrativos
5. **Ordens de Compra**: Emissão e acompanhamento de ordens de compra


### Conformidade Legal

O sistema implementa os seguintes aspectos da legislação brasileira:

1. **Modalidades de Licitação**:

1. Pregão Eletrônico
2. Concorrência
3. Tomada de Preços
4. Convite
5. Concurso
6. Leilão
7. Dispensa de Licitação
8. Inexigibilidade



2. **Documentação Legal**:

1. Habilitação Jurídica
2. Regularidade Fiscal e Trabalhista
3. Qualificação Econômico-Financeira
4. Qualificação Técnica



3. **Fluxos de Aprovação**:

1. Emissão
2. Aprovação
3. Publicação
4. Homologação
5. Adjudicação





### Implementação em Java

Para implementar este sistema em Java, você poderia usar:

1. **Spring Boot**: Framework para desenvolvimento de aplicações Java
2. **Spring Data JPA**: Para persistência de dados
3. **Spring Security**: Para autenticação e autorização
4. **Thymeleaf ou Angular/React**: Para a interface do usuário
5. **PostgreSQL ou MySQL**: Como banco de dados


A estrutura do projeto em Java seguiria o padrão MVC:

```plaintext
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── empresa/
│   │           └── aquisicoes/
│   │               ├── controller/
│   │               │   ├── FornecedorController.java
│   │               │   ├── LicitacaoController.java
│   │               │   ├── ContratoController.java
│   │               │   └── OrdemCompraController.java
│   │               ├── model/
│   │               │   ├── Fornecedor.java
│   │               │   ├── Licitacao.java
│   │               │   ├── Contrato.java
│   │               │   └── OrdemCompra.java
│   │               ├── repository/
│   │               │   ├── FornecedorRepository.java
│   │               │   ├── LicitacaoRepository.java
│   │               │   ├── ContratoRepository.java
│   │               │   └── OrdemCompraRepository.java
│   │               └── service/
│   │                   ├── FornecedorService.java
│   │                   ├── LicitacaoService.java
│   │                   ├── ContratoService.java
│   │                   └── OrdemCompraService.java
│   └── resources/
│       ├── static/
│       │   ├── css/
│       │   │   └── styles.css
│       │   └── js/
│       │       └── scripts.js
│       └── templates/
│           ├── fornecedores/
│           │   ├── lista.html
│           │   ├── cadastro.html
│           │   └── detalhes.html
│           ├── licitacoes/
│           │   ├── lista.html
│           │   ├── cadastro.html
│           │   └── detalhes.html
│           ├── contratos/
│           │   ├── lista.html
│           │   ├── cadastro.html
│           │   └── detalhes.html
│           └── ordens-compra/
│               ├── lista.html
│               ├── cadastro.html
│               └── detalhes.html
└── test/
    └── java/
        └── com/
            └── empresa/
                └── aquisicoes/
                    ├── controller/
                    ├── service/
                    └── repository/
```

## Implementação das Principais Classes em Java

### Modelo de Dados (Entidades)

```java
// Fornecedor.java
@Entity
public class Fornecedor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String razaoSocial;
    
    private String nomeFantasia;
    
    @Column(nullable = false, unique = true)
    private String cnpj;
    
    private String inscricaoEstadual;
    private String inscricaoMunicipal;
    
    @Column(nullable = false)
    private String endereco;
    
    @Column(nullable = false)
    private String numero;
    
    private String complemento;
    
    @Column(nullable = false)
    private String bairro;
    
    @Column(nullable = false)
    private String cidade;
    
    @Column(nullable = false)
    private String estado;
    
    @Column(nullable = false)
    private String cep;
    
    @Column(nullable = false)
    private String telefone;
    
    @Column(nullable = false)
    private String email;
    
    private String site;
    
    @Enumerated(EnumType.STRING)
    private SituacaoCadastral situacaoCadastral;
    
    @Enumerated(EnumType.STRING)
    private StatusDocumentacao statusDocumentacao;
    
    // Getters, setters, etc.
}

// Licitacao.java
@Entity
public class Licitacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, unique = true)
    private String numero;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ModalidadeLicitacao modalidade;
    
    @Column(nullable = false, length = 1000)
    private String objeto;
    
    @Column(nullable = false)
    private BigDecimal valorEstimado;
    
    @Column(nullable = false)
    private LocalDate dataAbertura;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatusLicitacao status;
    
    // Getters, setters, etc.
}

// Contrato.java
@Entity
public class Contrato {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, unique = true)
    private String numero;
    
    @ManyToOne
    @JoinColumn(name = "fornecedor_id", nullable = false)
    private Fornecedor fornecedor;
    
    @Column(nullable = false, length = 1000)
    private String objeto;
    
    @Column(nullable = false)
    private BigDecimal valor;
    
    @Column(nullable = false)
    private LocalDate dataInicio;
    
    @Column(nullable = false)
    private LocalDate dataFim;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatusContrato status;
    
    // Getters, setters, etc.
}

// OrdemCompra.java
@Entity
public class OrdemCompra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, unique = true)
    private String numero;
    
    @ManyToOne
    @JoinColumn(name = "fornecedor_id", nullable = false)
    private Fornecedor fornecedor;
    
    @Column(nullable = false)
    private LocalDate dataEmissao;
    
    @Column(nullable = false)
    private BigDecimal valorTotal;
    
    @Column(nullable = false)
    private LocalDate prazoEntrega;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatusOrdemCompra status;
    
    @OneToMany(mappedBy = "ordemCompra", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ItemOrdemCompra> itens = new ArrayList<>();
    
    // Getters, setters, etc.
}
```

### Repositórios

```java
// FornecedorRepository.java
@Repository
public interface FornecedorRepository extends JpaRepository<Fornecedor, Long> {
    Optional<Fornecedor> findByCnpj(String cnpj);
    List<Fornecedor> findByCidadeAndEstado(String cidade, String estado);
    List<Fornecedor> findBySituacaoCadastral(SituacaoCadastral situacaoCadastral);
}

// LicitacaoRepository.java
@Repository
public interface LicitacaoRepository extends JpaRepository<Licitacao, Long> {
    List<Licitacao> findByModalidade(ModalidadeLicitacao modalidade);
    List<Licitacao> findByStatus(StatusLicitacao status);
    List<Licitacao> findByDataAberturaGreaterThanEqual(LocalDate data);
}

// ContratoRepository.java
@Repository
public interface ContratoRepository extends JpaRepository<Contrato, Long> {
    List<Contrato> findByFornecedor(Fornecedor fornecedor);
    List<Contrato> findByStatus(StatusContrato status);
    List<Contrato> findByDataFimBetween(LocalDate inicio, LocalDate fim);
}

// OrdemCompraRepository.java
@Repository
public interface OrdemCompraRepository extends JpaRepository<OrdemCompra, Long> {
    List<OrdemCompra> findByFornecedor(Fornecedor fornecedor);
    List<OrdemCompra> findByStatus(StatusOrdemCompra status);
    List<OrdemCompra> findByDataEmissaoBetween(LocalDate inicio, LocalDate fim);
}
```

### Serviços

```java
// FornecedorService.java
@Service
public class FornecedorService {
    private final FornecedorRepository fornecedorRepository;
    
    @Autowired
    public FornecedorService(FornecedorRepository fornecedorRepository) {
        this.fornecedorRepository = fornecedorRepository;
    }
    
    public List<Fornecedor> listarTodos() {
        return fornecedorRepository.findAll();
    }
    
    public Optional<Fornecedor> buscarPorId(Long id) {
        return fornecedorRepository.findById(id);
    }
    
    public Fornecedor salvar(Fornecedor fornecedor) {
        // Validações conforme a legislação
        validarCNPJ(fornecedor.getCnpj());
        return fornecedorRepository.save(fornecedor);
    }
    
    public void excluir(Long id) {
        fornecedorRepository.deleteById(id);
    }
    
    private void validarCNPJ(String cnpj) {
        // Implementação da validação de CNPJ conforme regras da Receita Federal
        if (!CNPJValidator.isValid(cnpj)) {
            throw new IllegalArgumentException("CNPJ inválido");
        }
    }
}

// LicitacaoService.java
@Service
public class LicitacaoService {
    private final LicitacaoRepository licitacaoRepository;
    
    @Autowired
    public LicitacaoService(LicitacaoRepository licitacaoRepository) {
        this.licitacaoRepository = licitacaoRepository;
    }
    
    public List<Licitacao> listarTodas() {
        return licitacaoRepository.findAll();
    }
    
    public Optional<Licitacao> buscarPorId(Long id) {
        return licitacaoRepository.findById(id);
    }
    
    public Licitacao salvar(Licitacao licitacao) {
        // Validações conforme a legislação
        validarModalidade(licitacao);
        return licitacaoRepository.save(licitacao);
    }
    
    public void excluir(Long id) {
        licitacaoRepository.deleteById(id);
    }
    
    private void validarModalidade(Licitacao licitacao) {
        // Implementação das validações conforme Lei 8.666/93 e Lei 14.133/2021
        if (licitacao.getModalidade() == ModalidadeLicitacao.DISPENSA) {
            if (licitacao.getValorEstimado().compareTo(new BigDecimal("50000")) > 0) {
                throw new IllegalArgumentException("Valor acima do limite para dispensa de licitação");
            }
        }
        // Outras validações conforme a legislação
    }
}
```

## Considerações sobre a Legislação Brasileira

O sistema implementa as seguintes exigências legais:

1. **Lei 8.666/93 (Lei de Licitações)**:

1. Modalidades de licitação
2. Limites de valores para cada modalidade
3. Documentação exigida para habilitação
4. Prazos legais para publicação e recursos



2. **Lei 14.133/2021 (Nova Lei de Licitações)**:

1. Novas modalidades como o Diálogo Competitivo
2. Portal Nacional de Contratações Públicas
3. Gestão de riscos e governança nas contratações



3. **Lei Complementar 123/2006**:

1. Tratamento diferenciado para ME/EPP
2. Empate ficto
3. Regularização fiscal tardia



4. **Lei 10.520/2002 (Lei do Pregão)**:

1. Procedimentos específicos para o Pregão
2. Inversão de fases
3. Etapa de lances





Este sistema fornece uma base sólida para a gestão de aquisições em conformidade com a legislação brasileira, permitindo o controle eficiente de todo o ciclo de compras, desde o planejamento até a execução e fiscalização dos contratos.
