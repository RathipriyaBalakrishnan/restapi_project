package com.example.demo.model;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String uname;
	private String email;
	private String pword;
	@OneToMany(mappedBy = "organizer",cascade = CascadeType.ALL) // One user can organize many events
    private List<Eventdetails> organizedEvents;

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPword() {
		return pword;
	}
	public void setPword(String pword) {
		this.pword = pword;
	}
	public List<Eventdetails> getOrganizedEvents() {
		return organizedEvents;
	}
	public void setOrganizedEvents(List<Eventdetails> organizedEvents) {
		this.organizedEvents = organizedEvents;
	}
	
	

}
