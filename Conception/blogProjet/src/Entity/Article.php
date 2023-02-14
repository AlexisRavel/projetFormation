<?php

namespace App\Entity;

use App\Repository\ArticleRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ArticleRepository::class)]
#[ApiResource(
    collectionOperations: ['get'],
    itemOperations: ['get', "put", "delete"],
)]
class Article {
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['article:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['article:read'])]
    private ?string $titre = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['article:read'])]
    private ?string $contenu = null;

    #[ORM\Column]
    #[Groups(['article:read'])]
    private ?bool $isPost = null;

    #[ORM\Column]
    #[Groups(['article:read'])]
    private ?\DateTimeImmutable $datePublication = null;

    #[ORM\ManyToOne(inversedBy: 'articles')]
    private ?User $auteur = null;

    public function getId(): ?int {
        return $this->id;
    }

    public function getTitre(): ?string {
        return $this->titre;
    }

    public function setTitre(string $titre): self {
        $this->titre = $titre;

        return $this;
    }

    public function getContenu(): ?string {
        return $this->contenu;
    }

    public function setContenu(string $contenu): self {
        $this->contenu = $contenu;

        return $this;
    }

    public function isIsPost(): ?bool {
        return $this->isPost;
    }

    public function setIsPost(bool $isPost): self {
        $this->isPost = $isPost;

        return $this;
    }

    public function getDatePublication(): ?\DateTimeImmutable {
        return $this->datePublication;
    }

    public function setDatePublication(\DateTimeImmutable $datePublication): self {
        $this->datePublication = $datePublication;

        return $this;
    }

    public function getAuteur(): ?User
    {
        return $this->auteur;
    }

    public function setAuteur(?User $auteur): self
    {
        $this->auteur = $auteur;

        return $this;
    }
}
