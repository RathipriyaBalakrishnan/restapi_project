package com.example.demo.service;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Eventdetails;
import com.example.demo.model.User;
import com.example.demo.repo.EventRepo;
import com.example.demo.repo.UserRepo;



@Service
public class UserService {
	
	@Autowired
	public UserRepo urpo;

	public User saveUser(User u)
	{
		return urpo.save(u);
	}
	public boolean validateLogin(String email, String pword) {
		 User user = urpo.findByEmail(email);
	        if (user != null && user.getPword().equals(pword)) {
	            return true;
	        }

	        return false;
	    }
	public User getUserByEmail(String email) {
	    return urpo.findByEmail(email);
	}
	
	@Autowired
    private EventRepo br;

	// post the data
		public  Eventdetails saveEvent(Eventdetails em) {
			return br.save(em);
		}

		// get the data
		public List<Eventdetails> getAllEvents() {
			return br.findAll();
		}
		
		// get the data using id
		public Eventdetails getEventid(Long id) {
			return br.findById(id).orElse(null);
		}
		// update the data
		public Eventdetails updateEvent(Eventdetails ev, Long id) {
		    Eventdetails studentx = br.findById(id).orElse(null);
		    if (studentx != null) {
		        if (ev.getName() != null) {
		            studentx.setName(ev.getName());
		        }
		        if (ev.getDate() != null) {
		            studentx.setDate(ev.getDate());
		        }
		        if (ev.getLocation() != null) {
		            studentx.setLocation(ev.getLocation());
		        }
		        if (ev.getDescription() != null) {
		            studentx.setDescription(ev.getDescription());
		        }
		        if (ev.getCapacity() != 0) {
		            studentx.setCapacity(ev.getCapacity());
		        }
		        return br.saveAndFlush(studentx);
		    } else {
		        return null;
		    }
		}


		// delete the data
		public void deleteEvent(Long id) {
			br.deleteById(id);
		}

 }

