package rs.ac.singidunum;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository<Users, Integer> {

    public Users findByEmail(String email);
    public Users findByUsername(String username);
    public Users findByUsernameAndPassword(String username, String password);
}
