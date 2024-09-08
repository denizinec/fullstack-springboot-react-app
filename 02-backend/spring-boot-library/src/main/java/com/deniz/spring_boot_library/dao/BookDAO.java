package com.deniz.spring_boot_library.dao;

import com.deniz.spring_boot_library.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookDAO extends JpaRepository<Book, Long> {
}
