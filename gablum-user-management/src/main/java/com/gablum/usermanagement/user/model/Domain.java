package com.gablum.usermanagement.user.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Getter
@Setter
@Document("domains")
public class Domain {
    private List<Map<String, List<String>>> details;
    public Domain(){
        List<String> agriSubDomain = new ArrayList<>();
        agriSubDomain.add("Raw Material");
        agriSubDomain.add("Machinery");
        agriSubDomain.add("Produce");
        Map<String, List<String>> agri = new HashMap<String, List<String>>();
        agri.put("Agriculture", agriSubDomain);
        details.add(agri);
    }
    public void addSubDomain(Map<String, List<String>> subDomain){
        details.add(subDomain);
    }
}
