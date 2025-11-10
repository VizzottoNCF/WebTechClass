import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

public class Principal {

	public static void main(String[] args) {
		Pessoa p1 = new Pessoa(null, "Lucas", "lucas@gmail.com", "Professor");
		Pessoa p2 = new Pessoa(null, "João", "joao@gmail.com", "Aluno");
		Pessoa p3 = new Pessoa(null, "Pedro", "pedro@gmail.com", "Funcionário");
		Pessoa p;
		
		System.out.println("Imprimindo as pessoas que queremos cadastrar:\n");
		System.out.println(p1);
		System.out.println(p2);
		System.out.println(p3);


		EntityManagerFactory emf = Persistence.createEntityManagerFactory("jpahibernate");
		EntityManager em = emf.createEntityManager();

		System.out.println("INICIANDO AS OPERAÇÕES NO BANCO DE DADOS:\n");
		em.getTransaction().begin(); //abrir transacao com o db
		
		p = em.find(Pessoa.class, 1); //'find' serve para pesquisar nesse caso obter pelo id
		System.out.println("Pessoa: "+p);
		//p.setNome("Robson");  //'set' serve para atualizar na tabela o mesmo que 'UPDATE'
		//em.remove(p); //remove o p selecionado
//		em.persist(p1);  //persist serve para uma criar pessoa na tabela
		 em.persist(p2);
		 em.persist(p3);
		em.getTransaction().commit(); //fechar transacao com o db


		

		//p = em.find(Pessoa.class, 2);
		//System.out.println(p);
	}

}
