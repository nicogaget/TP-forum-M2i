package com.nicolas.back.repositories;

import org.hibernate.metamodel.model.convert.spi.JpaAttributeConverter;

public interface MessageRepository extends JpaAttributeConverter<Message,Long> {
}
