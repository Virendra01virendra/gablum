package com.gablum.usermanagement.user.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document("user")
public class User {

    @Id
    private String _id;
    @NotEmpty(message = "*Please provide your name")
    private String name;
    @Email(message = "*Please provide a valid email")
    @NotEmpty(message = "*Please provide an email")
    private String email;
    private String password;
    private String address;
    private long phone;
    private String companyName;
    private String userName;
    private String businessLicense;

    public enum role {
        BUYER, SELLER, BOTH, ADMIN
    }
    private List<Map<String, List<String>>> userDomainDetails;
    // TODO: add methods to add userDomainDetails: DONE
    private Set<Role> role = Set.of(new Role(1, "buyer"));
    // TODO: remove hard coded role: DONE
    private Integer active=1;
    private boolean isLocked=false;
    private boolean isExpired=false;
    private boolean isEnabled=true;


    public boolean isLocked() {
        return isLocked;
    }

    public void setLocked(boolean loacked) {
        isLocked = loacked;
    }

    public boolean isExpired() {
        return isExpired;
    }

    public void setExpired(boolean expired) {
        isExpired = expired;
    }

    public boolean isEnabled() {
        return isEnabled;
    }

    public void setEnabled(boolean enabled) {
        isEnabled = enabled;
    }

    public Set<Role> getRole() {
        return role;
    }

    public void setRole(Set<Role> role) {
        this.role = role;
    }


}
