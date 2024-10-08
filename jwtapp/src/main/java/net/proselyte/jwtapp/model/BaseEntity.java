package net.proselyte.jwtapp.model;

import lombok.Data;

import javax.persistence.MappedSuperclass;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import java.util.Date;

@MappedSuperclass
@Data
public class BaseEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@CreatedDate
	@Column(name = "created")
	private Date created;

	@LastModifiedDate
	@Column(name = "updated")
	private Date updated;

	@Enumerated(EnumType.STRING)
	@Column(name = "status")
	private Status status;
}