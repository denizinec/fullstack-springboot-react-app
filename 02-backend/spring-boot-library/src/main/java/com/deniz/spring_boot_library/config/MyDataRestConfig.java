package com.deniz.spring_boot_library.config;

import com.deniz.spring_boot_library.entity.Book;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

    private String allowedOrigins = "http://localhost:3000";

    @Override
    public void configureRepositoryRestConfiguration
            (RepositoryRestConfiguration
                     config, CorsRegistry cors){
// HttpMethod.POST, add this
        HttpMethod[] unsupportedActions = {HttpMethod.PATCH,
        HttpMethod.DELETE, HttpMethod.PUT};

        config.exposeIdsFor(Book.class);

        disableHttpMethods(Book.class, config, unsupportedActions);


        cors.addMapping(config.getBasePath() + "/**")
                .allowedOrigins(allowedOrigins);
    }

    private void disableHttpMethods(Class bookClass, RepositoryRestConfiguration config, HttpMethod[] unsupportedActions) {
        config.getExposureConfiguration().forDomainType(bookClass).withItemExposure((metdata, httpMethods) -> httpMethods.disable(unsupportedActions))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(unsupportedActions));

    }

}
